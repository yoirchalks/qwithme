import { getUserById } from "../sockets/store";
import { getIO } from "../startup/sockets";

export default (staffId: string, message: string) => {
  const io = getIO();
  const staff = getUserById(staffId);
  console.log(staff);

  if (staff && staff.roomNumber) {
    io.to(staff.roomNumber).emit("room_message", message);
  } else {
    console.warn(`Staff with ID ${staffId} not found or not in a room.`);
  }
};
