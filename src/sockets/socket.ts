import { Server as SocketIOServer } from "socket.io";
import { clearStore, getAllUsers, setUser, removeSocket } from "./store";
import { prisma } from "../db/prisma";

export function setupSocketIO(io: SocketIOServer) {
  io.on("connection", async (socket) => {
    const uuid = socket.handshake.auth.uuid;
    if (!uuid) {
      console.log("no uuid provided. disconnecting");
      socket.disconnect();
      return;
    }

    const user = await prisma.user.findUnique({
      where: {
        id: uuid,
      },
    });

    let roomId: number | undefined;

    if (user?.role === "patient") {
      const room = await prisma.ques.findFirst({
        where: {
          patient_id: user.patientId!,
          status: "waiting",
        },
      });
      roomId = room?.room_id;
    } else if (user?.role === "staff") {
      const staffRoom = await prisma.staff_rooms.findFirst({
        where: {
          staff_id: user.staffId!,
        },
      });
      roomId = staffRoom?.room_id;
    }

    let room = undefined;
    if (roomId !== undefined) {
      room = await prisma.rooms.findUnique({
        where: {
          id: roomId,
        },
      });
      if (room?.room_number) {
        socket.join(room.room_number);
      }
    }

    if (!user) {
      console.log("no user found with uuid. disconnecting");
      socket.disconnect();
      return;
    }

    setUser(socket.id, {
      userId: uuid,
      role: user.role,
      roomNumber: room?.room_number ?? null,
    });

    console.log("User connected:", socket.id);
    socket.emit("ready");

    socket.on("get_list", () => {
      socket.emit("send_patients", getAllUsers());
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      removeSocket(socket.id);
    });

    socket.on("on_connected", async (usersUuid) => {
      console.log("uuid", usersUuid);

      const user = await prisma.user.findUnique({
        where: { id: usersUuid },
      });

      if (user?.patientId) {
        const queueDetails = await prisma.ques.findFirst({
          where: {
            patient_id: user.patientId,
            status: { in: ["waiting", "being_seen"] },
          },
        });

        const peopleInLine = await prisma.ques.count({
          where: {
            room_id: queueDetails?.room_id,
            status: "waiting",
            NOT: { patient_id: user.patientId },
          },
        });

        if (peopleInLine === 0) {
          socket.emit(
            "user_message",
            "you are first in line. Dr will call you shortly"
          );
        } else {
          socket.emit(
            "user_message",
            `You are number ${peopleInLine} in line. \nExpected wait is ${
              peopleInLine * 15
            } min.`
          );
        }
      }

      if (user?.staffId) {
        const allocatedRoom = await prisma.staff_rooms.findFirst({
          where: {
            staff_id: user.staffId,
            sign_in_time: { not: null },
            sign_out_time: null,
          },
        });
        if (!allocatedRoom) {
          socket.emit("user_message", "system hasn't found an allocated room");
        }
        const room = await prisma.rooms.findUnique({
          where: { id: allocatedRoom?.room_id },
          select: { room_number: true },
        });
        socket.emit(
          "user_message",
          `You have been assigned room ${room?.room_number}`
        );
      }
    });
  });

  process.on("SIGINT", () => {
    console.log("Server shutting down...");
    clearStore();
    io.close(() => {
      console.log("Socket server closed");
      process.exit(0);
    });
  });
}
