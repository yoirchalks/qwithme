import { Server as SocketIOServer } from "socket.io";
import { deleteAllUsers, deleteUser, getAllUsers, setUser } from "./store";
import { prisma } from "../db/prisma";

export function setupSocketIO(io: SocketIOServer) {
  io.on("connection", async (socket) => {
    const uuid = socket.handshake.auth.uuid;
    if (!uuid) {
      console.log("no uuid provided. disconnecting");
      socket.disconnect();
    }

    const user = await prisma.user.findUnique({
      where: {
        id: uuid,
      },
    });

    let roomId;

    if (user?.role == "patient") {
      const room = await prisma.ques.findUnique({
        where: {
          patient_id: user.patientId!,
        },
      });
      roomId = room?.room_id;
    } else {
      const room = prisma.staff_rooms.findUnique({
        where: {
          staff_id: user?.staffId!,
        },
      });
    }

    const room = await prisma.rooms.findUnique({
      where: {
        id: roomId,
      },
    });

    socket.join(room?.room_number!);

    if (!user) {
      console.log("no user found with uuid. disconnecting");
      socket.disconnect();
    }
    setUser(uuid, {
      socketId: socket.id,
      userId: uuid,
      role: null,
      roomNumber: null,
    });
    console.log("User connected:", socket.id);

    socket.on("get_list", () => {
      socket.emit("send_patients", getAllUsers());
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      deleteUser(socket.id);
    });
  });

  process.on("SIGINT", () => {
    console.log("Server shutting down...");
    deleteAllUsers();
    io.close(() => {
      console.log("Socket server closed");
      process.exit(0);
    });
  });
}
