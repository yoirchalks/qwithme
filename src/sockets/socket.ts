import { Server as SocketIOServer } from "socket.io";
import { deleteAllUsers, deleteUser, getAllUsers } from "./store";

export function setupSocketIO(io: SocketIOServer) {
  io.on("connection", (socket) => {
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
