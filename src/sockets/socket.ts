import { Server as SocketIOServer } from "socket.io";
import { deleteAllUsers, deleteUser, getUserIdBySocket } from "./store";

export function setupSocketIO(io: SocketIOServer) {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("message", (data) => {
      console.log("Message received:", data);
      // handle the message
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      const userId = getUserIdBySocket(socket.id);
      deleteUser(userId);
    });
  });

  process.on("SIGINT", () => {
    console.log("Server shutting down...");
    deleteAllUsers(); // Cleanup all users
    io.close(() => {
      console.log("Socket server closed");
      process.exit(0); // Exit the process
    });
  });
}
