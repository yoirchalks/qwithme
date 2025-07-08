import { prisma } from "../db/prisma";
import { CustomError } from "./CustomError";

export default async function (drId: number) {
  const unassignedRoom = await prisma.rooms.findFirst({
    where: {
      staff_rooms: {
        none: {
          sign_out_time: null, //TODO: also not correct. only returns room that was signed in and then out. will not return room that is not yet signed in.
        },
      },
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
