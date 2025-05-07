import express, { Request, Response } from "express";
import validateSignOut from "../validators/signOut.validator";
import { CustomError } from "../utils/CustomError";
import { prisma } from "../db/prisma";
import { getIO } from "../startup/sockets";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const result = validateSignOut(req.body);
  if (!result.success)
    throw new CustomError(
      400,
      `${result.field} is ${result.message?.toLowerCase()}`
    );

  const io = getIO();
  const socket = io.sockets.sockets.get(result.body?.socketId!);
  const staffId = result.body?.staffId;

  const signIn = await prisma.staff_rooms.findFirst({
    where: {
      staff_id: staffId,
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
      staff_id: staffId,
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
  const time = new Date().toLocaleTimeString();
  const signOut = await prisma.staff_rooms.update({
    data: {
      sign_out_time: new Date(),
    },
    where: {
      staff_id: staffId,
    },
  });

  socket?.send("signed out");

  res.send(signOut);
});

export default router;
