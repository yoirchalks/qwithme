import { getUserById } from "../sockets/store";
import { getIO } from "../startup/sockets";

export default function (uuid: string, message: string) {
  const socketId = getUserById(uuid)!.socketId;
  const io = getIO();
  const socket = io.sockets.sockets.get(socketId);
  socket?.emit(`user_message`, message);

  return socket;
}
