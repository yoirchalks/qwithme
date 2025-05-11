import { getStaffById } from "../sockets/store";
import { getIO } from "../startup/sockets";

export default (staffId: number, message: string) => {
  const io = getIO();
  console.log(getStaffById(staffId));

  io.to(getStaffById(staffId).roomNumber!).emit("message", message);
};
