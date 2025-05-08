import express, { Request, Response } from "express";
import assignRoom from "../utils/signInDr";
import validateSignIn from "../validators/signIns.validator";
import { CustomError } from "../utils/CustomError";
import signInPatient from "../utils/signInPatient";
import { getIO } from "../startup/sockets";
import { getUserById, setUser } from "../sockets/store";
import { prisma } from "../db/prisma";

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
    const id = req.body.id;
    const roomAssignment = await assignRoom(id);

    const io = getIO();
    const socketId = getUserById(id).socketId;
    const socket = io.sockets.sockets.get(socketId);
    const roomDetails = await prisma?.rooms.findUnique({
      where: {
        id: roomAssignment.room_id,
      },
    });
    console.log(roomAssignment);

    socket?.join([`${roomAssignment.room_id.toString()}`, "staff"]);
    socket?.send(`you have been  assigned room ${roomDetails?.room_number}`);
    setUser(socketId, {
      socketId,
      role: "staff",
      roomNumber: roomDetails!.room_number,
      userId: result.body!.staffId,
    });
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

    const patientId = req.body.patientId;
    const socketId = getUserById(patientId).socketId;
    const que = await signInPatient(req.body.staffId, patientId, socketId);
    const roomDetails = await prisma?.rooms.findUnique({
      where: {
        id: que.room_id,
      },
    });
    const io = getIO();

    const socket = io.sockets.sockets.get(socketId);
    socket?.join(que.room_id.toString());
    socket?.emit(
      "joined_que",
      `You are number ${que.queue_number} in line for room ${
        roomDetails?.room_number
      }.\n Expected wait time is ${que.queue_number * 15} minutes`
    );

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
