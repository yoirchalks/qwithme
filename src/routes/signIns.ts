import assignRoom from "../utils/signInDr";
import { CustomError } from "../utils/CustomError";
import express, { Request, Response } from "express";
import { prisma } from "../db/prisma";
import signInPatient from "../utils/signInPatient";
import validateSignIn from "../validators/signIns.validator";
import _ from "lodash";
import { getImageString } from "../utils/imageFromAndToDb";
import { getIO } from "../startup/sockets";
import { getUserById } from "../sockets/store";

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
    const imageResult = await prisma.staff.findUnique({
      where: { id },
      select: { image: true },
    });

    const image = imageResult?.image ? getImageString(imageResult.image) : null;

    const roomAssignment = await assignRoom(id);

    const roomDetails = await prisma?.rooms.findFirst({
      where: {
        id: roomAssignment.room_id,
      },
    });

    const user = await prisma.user.findFirst({
      where: {
        staffId: id,
      },
    });

    _.set(roomAssignment, "uuid", user?.id);
    console.log(user);

    const responseResult = { ...roomAssignment, image };
    res.send(responseResult);
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
    const imageResult = await prisma.patients.findFirst({
      where: {
        id: req.body.patientId,
      },
      select: {
        image: true,
      },
    });
    const roomDetails = await prisma?.rooms.findFirst({
      where: {
        id: que!.room_id,
      },
    });
    const user = await prisma.user.findUnique({
      where: {
        patientId: req.body.patientId,
      },
    });

    const image = imageResult?.image ? getImageString(imageResult.image) : null;

    const updatedQue = { ...que, image };
    console.log(user!.id);

    _.set(updatedQue, "uuid", user?.id);

    res.send(updatedQue);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  //sign out route
  const id = parseInt(req.params.id);
  const uuid = await prisma.user.findUnique({
    where: { staffId: id },
    select: { id: true },
  });

  const io = getIO();
  const socket = io.sockets.sockets.get(getUserById(uuid!.id)!.socketId);

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
    res.send("you are not logged in");
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
      422,
      `Unable to sign out whilst patients are waiting`
    );
  }

  const roomId = await prisma.staff_rooms.findFirst({
    where: { staff_id: id },
    select: { id: true },
  });

  const signOut = await prisma.staff_rooms.update({
    data: {
      sign_out_time: new Date(),
    },
    where: {
      id: roomId?.id,
    },
  });

  socket?.send("signed out");

  res.send(signOut);
});

export default router;
