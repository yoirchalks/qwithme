import { Server as SocketIOServer } from "socket.io";
import { clearStore, getAllUsers, setUser, removeSocket } from "./store"; // CHANGED: import new API
import { prisma } from "../db/prisma";

export function setupSocketIO(io: SocketIOServer) {
  io.on("connection", async (socket) => {
    const uuid = socket.handshake.auth.uuid;
    if (!uuid) {
      console.log("no uuid provided. disconnecting");
      socket.disconnect();
      return; // CHANGED: ensure early return after disconnect
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
      // CHANGED: fix missing await and role check
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
      return; // CHANGED: ensure early return after disconnect
    }

    // CHANGED: setUser now expects (socketId, userInfo) with enforced single connection
    setUser(socket.id, {
      userId: uuid,
      role: user.role,
      roomNumber: room?.room_number ?? null,
    });

    console.log("User connected:", socket.id);

    socket.on("get_list", () => {
      socket.emit("send_patients", getAllUsers());
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      removeSocket(socket.id); // CHANGED: use removeSocket, not deleteUser
    });
  });

  process.on("SIGINT", () => {
    console.log("Server shutting down...");
    clearStore(); // CHANGED: use clearStore instead of deleteAllUsers
    io.close(() => {
      console.log("Socket server closed");
      process.exit(0);
    });
  });
}
