import assignRoom from "../utils/signInDr";
import { CustomError } from "../utils/CustomError";
import express, { Request, Response } from "express";
import { getIO } from "../startup/sockets";
import { getUserById } from "../sockets/store";
import { prisma } from "../db/prisma";
import sendMessage from "../utils/sendMessage";
import signInPatient from "../utils/signInPatient";
import validateSignIn from "../validators/signIns.validator";
import _ from "lodash";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const attempt = req.body.attempt;
  if (attempt != "doctor" && attempt != "patient")
    throw new CustomError(
      400,
      `must contain field "attempt" set to "doctor" or patient"`
    );

  if (attempt === "doctor") {
    const result = validateSignIn("staff", req.body);
    if (!result.success) {
      throw new CustomError(
        400,
        `${result.field} is ${result.message?.toLowerCase()}`
      );
    }
    const id = req.body.staffId;

    const roomAssignment = await assignRoom(id);

    const roomDetails = await prisma?.rooms.findUnique({
      where: {
        id: roomAssignment.room_id,
      },
    });

    const socket = sendMessage(
      req.body.socketId,
      `you have been assigned room ${roomDetails?.room_number}`
    );

    const user = await prisma.user.findUnique({
      where: {
        staffId: id,
      },
    });

    _.set(roomAssignment, "uuid", user?.id);
    res.send(roomAssignment);
  }

  if (attempt === "patient") {
    const result = validateSignIn("patient", req.body);
    if (!result.success) {
      throw new CustomError(
        400,
        `${result.field} is ${result.message?.toLowerCase()}`
      );
    }

    const que = await signInPatient(
      req.body.staffId,
      req.body.patientId,
      req.body.socketId
    );
    const roomDetails = await prisma?.rooms.findUnique({
      where: {
        id: que.room_id,
      },
    });

    const socket = sendMessage(
      req.body.socketId,
      `You are number ${que.queue_number} in line for room ${
        roomDetails?.room_number
      }.\n Expected wait time is ${que.queue_number * 15} minutes`
    );
    socket?.join(que.room_id.toString());
    res.send(que);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const io = getIO();
  const socket = io.sockets.sockets.get(getUserById(id).socketId);

  const signIn = await prisma.staff_rooms.findFirst({
    where: {
      staff_id: id,
      sign_in_time: {
        not: null,
      },
      sign_out_time: null,
    },
  });

  if (!signIn) {
    socket?.send("you are not currently logged in");
    throw new CustomError(400, "you are not currently logged in");
  }

  const pendingQues = await prisma.ques.findMany({
    where: {
      staff_id: id,
      completed_time: null,
    },
  });
  if (pendingQues.length) {
    socket?.send(
      `You can't sign out. You still have ${pendingQues.length} ${
        pendingQues.length > 1 ? "patients" : "patient"
      } to see.`
    );
    throw new CustomError(
      403,
      `Unable to sign out whilst patients are waiting`
    );
  }

  const signOut = await prisma.staff_rooms.update({
    data: {
      sign_out_time: new Date(),
    },
    where: {
      staff_id: id,
    },
  });

  socket?.send("signed out");

  res.send(signOut);
});

export default router;
