import express, { Request, Response } from "express";
import { prisma } from "../db/prisma";
import validateUser from "../validators/users.validator";
import { CustomError } from "../utils/CustomError";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const result = await prisma.patients.findMany();
  res.send(result);
});

router.post("/", async (req: Request, res: Response) => {
  const result = validateUser(req.body);
  if (!result.success)
    throw new CustomError(
      400,
      `${result.field} is ${result.message?.toLowerCase()}`
    );
  const {
    fullName,
    address,
    emailAddress,
    contactNumber,
    image,
    chronicDiagnoses,
    drId,
  } = req.body;
  const doctor = await prisma.staff.findFirst({
    where: {
      id: drId,
    },
  });
  if (!doctor)
    throw new CustomError(400, `no staff member with id ${drId} found`);
  if (doctor.position != "doctor")
    throw new CustomError(
      404,
      `staff member with id ${drId} works in ${doctor.position} and is not a doctor`
    );

  const patient = await prisma.patients.create({
    data: {
      full_name: fullName,
      address,
      contact_number: contactNumber,
      image,
      email_address: emailAddress,
      chronic_diagnosis: chronicDiagnoses,
      dr_id: drId,
    },
  });
  console.log(patient);

  res.send(patient);
});

router.get("/:id", async (req: Request, res: Response) => {
  const patientId = parseInt(req.params.id);
  const patient = await prisma.patients.findUnique({
    where: {
      id: patientId,
    },
  });
  if (!patient)
    throw new CustomError(400, `customer with id ${patientId} not found`);
  res.send(patient);
});

router.put("/:id", async (req: Request, res: Response) => {
  const patientId = parseInt(req.params.id);

  prisma.patients.update({
    where: {
      id: patientId,
    },
    data: {},
  });
});

export default router;
