import { Express } from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import { setupSocketIO } from "../sockets/socket";

let io: SocketIOServer | null = null;

export default function setUpSockets(app: Express): http.Server {
  const server = http.createServer(app);
  const io = new SocketIOServer(server, {
    cors: {
      origin: "http://127.0.0.1:5500",
      methods: ["GET", "PUT"],
    },
  });

  setupSocketIO(io);
  return server
}

export function getIO(): SocketIOServer {
    if (!io) {
      throw new Error("Socket.IO not initialized yet!");
    }
    return io;
  }
