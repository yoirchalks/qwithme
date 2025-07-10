import { prisma } from "../db/prisma";
import { CustomError } from "./CustomError";

const today = new Date();
today.setHours(0, 0, 0, 0);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export default async function (drId: number) {
  const unassignedRoom = await prisma.rooms.findFirst({
    where: {
      OR: [
        {
          staff_rooms: {
            none: {
              sign_in_time: {
                lt: tomorrow,
                gte: today,
              },
            },
          },
        },
        {
          staff_rooms: {
            some: {
              sign_in_time: {
                gte: today,
                lt: tomorrow,
              },
              sign_out_time: { not: null },
            },
          },
        },
      ],
    },
  });

  console.log("unassigned room: ", unassignedRoom?.id);

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
