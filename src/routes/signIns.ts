import express, { Request, Response } from "express";
import assignRoom from "../utils/signInDr";
import validateSignIn from "../validators/signIns.validator";
import { CustomError } from "../utils/CustomError";
import signInPatient from "../utils/signInPatient";
import { getIO } from "../startup/sockets";
import { getAllUsers, setUser } from "../sockets/store";

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
    const roomAssignment = await assignRoom(req.body.staffId);
    console.log(roomAssignment);

    const io = getIO();
    const socket = io.sockets.sockets.get(req.body.socketId);
    const roomDetails = await prisma?.rooms.findUnique({
      where: {
        id: roomAssignment.room_id,
      },
    });
    console.log(roomAssignment);

    socket?.join([`${roomAssignment.room_id.toString()}`, "staff"]);
    socket?.emit(
      "room_assignment",
      `you have been  assigned room ${roomDetails?.room_number}`
    );
    setUser(req.body.socketId, {
      socketId: req.body.socketId,
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

    const que = await signInPatient(req.body.staffId, req.body.patientId);
    const io = getIO();

    const socket = io.sockets.sockets.get(req.body.socketId);
    socket?.join(que.room_id.toString());
    socket?.emit(
      "joined_que",
      `you are number ${que.queue_number} in line for room ${que.room_id}`
    );

    res.send(que);
  }
});

export default router;
