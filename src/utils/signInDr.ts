import { prisma } from "../db/prisma";
import { CustomError } from "./CustomError";

export default async function (drId: number) {
  const unassignedRoom = await prisma.rooms.findFirst({
    where: {
      staff_rooms: {
        none: {
          sign_out_time: null,
        },
      },
    },
  });

  if (!unassignedRoom) throw new CustomError(404, `no available rooms found`);

  const roomAssignment = await prisma.staff_rooms.create({
    data: {
      staff_id: drId,
      room_id: unassignedRoom.id,
      sign_in_date: new Date(),
    },
  });
  return roomAssignment;
}
