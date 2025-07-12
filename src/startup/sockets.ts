import { Express } from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import { setupSocketIO } from "../sockets/socket";
import { CustomError } from "../utils/CustomError";

let io: SocketIOServer | null = null;

export default function setUpSockets(app: Express): http.Server {
  const server = http.createServer(app);
  io = new SocketIOServer(server, {
    cors: {
      origin: "https://clinic-app-e74u.onrender.com",
      methods: ["GET", "PUT"],
    },
  });

  setupSocketIO(io);
  return server;
}

export function getIO(): SocketIOServer {
  if (!io) {
    throw new CustomError(500, "Socket.IO not initialized yet!");
  }
  return io;
}
