import express, { Request, Response } from "express";
import assignRoom from "../utils/signInDr";
import validateSignIn from "../validators/signIns.validator";
import { CustomError } from "../utils/CustomError";
import signInPatient from "../utils/signInPatient";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const attempt = req.body.attempt;
  if (attempt != 'doctor' && attempt != 'patient') {
    res.status(400).send(`must contain attempt field set to either "doctor" or "patient"`)
    return
  }

  if (attempt === "doctor") {
    const result = validateSignIn("staff", req.body);
    if (!result.success) {
      throw new CustomError(
        400,
        `${result.field} is ${result.message?.toLowerCase()}`
      );
    }
    const roomAssignment = await assignRoom(req.body.staffId);
    res.send(roomAssignment);
  }

  if (attempt === 'patient') {
    const result = validateSignIn("patient", req.body); 
    if (!result.success) {
        throw new CustomError(
          400,
          `${result.field} is ${result.message?.toLowerCase()}`
        );
    }
    
    const que = await signInPatient(req.body.staffId, req.body.patientId)

    res.send(que)
}
});

export default router;
