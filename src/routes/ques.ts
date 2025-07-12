import express, { Request, Response } from "express";
import { prisma } from "../db/prisma";
import lateUpdate from "../utils/lateUpdate";
import { CustomError } from "../utils/CustomError";
import sendMessage from "../utils/sendMessage";
import { getUserById, removeUser } from "../sockets/store";
import { getIO } from "../startup/sockets";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const roomId = (req.query.roomId as string) || null;
  let cleanedRoomId;
  if (roomId && /^[1-9]\d*$/.test(roomId)) {
    cleanedRoomId = parseInt(roomId);
  } else {
    res.status(400).send(`room id can only be an integer`);
    return;
  }
  let results;
  if (cleanedRoomId) {
    results = await prisma.ques.findMany({
      where: {
        room_id: cleanedRoomId,
      },
    });
  } else {
    results = await prisma.ques.findMany();
  }

  res.send(results);
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const que = await prisma.ques.findFirst({
    where: {
      id: id,
    },
  });

  if (!que) {
    res.status(404).send(`no que found with id ${req.params.id}`);
    return;
  }
  res.send(que);
});

router.put("/:id", async (req: Request, res: Response) => {
  const staffId = parseInt(req.params.id);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const allocatedRoom = await prisma.staff_rooms.findFirst({
    where: {
      staff_id: staffId,
      sign_in_time: {
        gte: today,
        lt: tomorrow,
      },
      sign_out_time: null,
    },
    select: { room_id: true },
  });

  await prisma.ques.updateMany({
    where: {
      room_id: allocatedRoom?.room_id,
      status: "being_seen",
    },
    data: {
      status: "done",
      completed_time: new Date(),
    },
  });

  const que = await prisma.ques.findFirst({
    where: {
      status: "waiting",
      room_id: allocatedRoom?.room_id,
    },
    orderBy: {
      sign_in_time: "asc",
    },
  });

  const staffUuid = await prisma.user.findUnique({
    where: { staffId: staffId },
    select: { id: true },
  });

  if (!que) {
    res.send("no patients waiting");
    sendMessage(staffUuid!.id, "No patients waiting");
    return;
  }

  const nextPatient = await prisma.ques.update({
    where: {
      id: que.id,
    },
    data: {
      status: "being_seen",
      started_time: new Date(),
    },
  });

  const nextPatientUuid = await prisma.user.findFirst({
    where: { patientId: que.patient_id },
    select: { id: true },
  });
  sendMessage(nextPatientUuid!.id, `Your doctor is  ready to see you.`);
  const io = getIO();
  const socketId = getUserById(nextPatientUuid!.id);
  io.sockets.sockets.get(socketId!.socketId)?.disconnect();

  removeUser(nextPatientUuid!.id);

  const peopleWaiting = await prisma.ques.count({
    where: {
      room_id: que.room_id,
      status: "waiting",
    },
  });

  const delayInMin =
    (nextPatient.started_time!.getTime() +
      peopleWaiting * 1000 * 60 * 15 -
      nextPatient.sign_in_time!.getTime()) /
    (1000 * 60);

  if (delayInMin > 2 && peopleWaiting !== 0) {
    const staff = await prisma.staff.findUnique({
      where: {
        id: nextPatient.staff_id,
      },
    });

    lateUpdate(
      staffUuid!.id,
      `${staff?.full_name} is running ${delayInMin} late. We are sorry for any inconvenience.`
    );
  }

  res.send(nextPatient);
});

router.put("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const que = await prisma.ques.findFirst({
    where: {
      patient_id: id,
      status: "waiting",
    },
  });
  if (!que)
    throw new CustomError(404, `no active que found for patient with id ${id}`);

  const cancelledQue = await prisma.ques.update({
    where: {
      id: que.id,
    },
    data: {
      status: "cancelled",
    },
  });

  res.send(cancelledQue);
});

export default router;
