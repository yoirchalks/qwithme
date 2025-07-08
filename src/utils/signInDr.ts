import { prisma } from "../db/prisma";
import { CustomError } from "./CustomError";

const today = new Date();
today.setHours(0, 0, 0, 0);

export default async function (drId: number) {
  const unassignedRoom = await prisma.rooms.findFirst({
    where: {
      OR: [
        {
          staff_rooms: {
            none: {
              sign_in_date: today,
            },
          },
        },
        {
          staff_rooms: {
            some: {
              sign_in_date: today,
              sign_out_time: { not: null },
            },
          },
        },
      ],
    },
  });

  if (!unassignedRoom) throw new CustomError(404, `no available rooms found`);

  const currentRoom = await prisma.staff_rooms.findFirst({
    where: {
      staff_id: drId,
      sign_out_time: null,
    },
  });

  if (currentRoom) {
    throw new CustomError(
      409,
      "can only assign single room to each staff member"
    );
  }

  const roomAssignment = await prisma.staff_rooms.create({
    data: {
      staff_id: drId,
      room_id: unassignedRoom.id,
      sign_in_date: new Date(),
    },
  });
  return roomAssignment;
}
