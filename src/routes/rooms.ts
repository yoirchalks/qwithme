import express, { Request, Response } from "express";
import { prisma } from "../db/prisma";
import validateRoom from "../validators/rooms.validator";
import { CustomError } from "../utils/CustomError";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const results = await prisma.rooms.findMany();
  res.send(results);
});

router.post("/", async (req: Request, res: Response) => {
  const result = validateRoom(req.body);
  if (!result.success)
    throw new CustomError(400, `${result.message?.toLowerCase()}`);
  const { roomNumber, roomType } = req.body;
  const room = await prisma.rooms.create({
    data: {
      room_number: roomNumber,
      room_type: roomType,
    },
  });
  res.send(room);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const roomId = parseInt(req.params.id);
  let room = await prisma.rooms.findUnique({
    where: {
      id: roomId,
    },
  });
  if (!room) throw new CustomError(404, `room with id ${roomId} not found`);

  room = await prisma.rooms.delete({
    where: {
      id: roomId,
    },
  });
  res.send(room);
});

export default router;
