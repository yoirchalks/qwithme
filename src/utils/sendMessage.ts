import { getIO } from "../startup/sockets";

export default function (socketId: string, message: string) {
  const io = getIO();
  const socket = io.sockets.sockets.get(socketId);
  socket?.emit(`user_message`, message);

  return socket;
}
