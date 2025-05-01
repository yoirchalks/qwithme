import express, { Request, Response } from "express";
import { prisma } from "../db/prisma";
import validateUser from "../validators/users.validator";
import { CustomError } from "../utils/CustomError";
import { cleanResult, cleanResults } from "../utils/cleanResults";
import cleanInputData from "../utils/cleanInputData";

const router = express.Router();
const clean = ['created_at', 'updated_at']

router.get("/", async (req: Request, res: Response) => {
  const result = await prisma.patients.findMany();
  const cleanedPatients = cleanResults(result, clean)
  res.send(cleanedPatients);
});

router.post("/", async (req: Request, res: Response) => {
  const result = validateUser('post', req.body);
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
  let bytes;
  if (image) {
    bytes = Buffer.from(image!, "base64");
  }
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
      image: bytes,
      email_address: emailAddress,
      chronic_diagnosis: chronicDiagnoses,
      dr_id: drId,
    },
  });
  const cleanedPatient = cleanResult(patient, clean )

  res.send(cleanedPatient);
});

router.get("/:id", async (req: Request, res: Response) => {
  const patientId = parseInt(req.params.id);
  const patient = await prisma.patients.findUnique({
    where: {
      id: patientId,
    },
  });
  if (!patient)
    throw new CustomError(404, `patient with id ${patientId} not found`);
  const cleanedPatient = cleanResult(patient, clean )

  res.send(cleanedPatient);
});

router.put("/:id", async (req: Request, res: Response) => {
  const patientId = parseInt(req.params.id);
  let patient = prisma.patients.findUnique({
    where: {
      id: patientId
    }
  })
  if(!patient){
    res.status(404).send(`patient with  id ${patientId} not found`)
    return
  }

  const data = cleanInputData(req.body)

  const result = validateUser('put', data)

  if (!result.success)
    throw new CustomError(
      400,
      `${result.field} is ${result.message?.toLowerCase()}`
    );

  const updateData: Record<string, any> = { ...result.body! };

  if (typeof req.body.image === "string" && req.body.image.length > 0) {
    updateData.image = Buffer.from(req.body.image, "base64");
  }

  const updatedPatient = await prisma.patients.update({
    where: {
      id: patientId,
    },
    data: updateData,
  });

  const cleanedPatient = cleanResult(updatedPatient, clean)
  res.send(cleanedPatient)
});

router.delete('/:id', async(req: Request, res: Response)=>{
  const id = parseInt(req.params.id);
    const staff = await prisma.patients.findUnique({
      where: {
        id: id,
      },
    });
  
    if (!staff) {
      res.status(400).send(`no patient found with id ${req.params.id}`);
      return;
    }
    await prisma.patients.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    const cleanedResult = cleanResult(staff, clean);
    res.send(cleanedResult);
})

export default router;
