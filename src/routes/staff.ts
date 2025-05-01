import express, { Request, Response } from "express";
import { prisma } from "../db/prisma";
import { CustomError } from "../utils/CustomError";
import validateStaff from "../validators/staff.validator";
import { cleanResult, cleanResults } from "../utils/cleanResults";
import cleanInputData from "../utils/cleanInputData";

const router = express.Router();
const clean = ["created_at", "updated_at"];

router.get("/", async (req: Request, res: Response) => {
  const result = await prisma.staff.findMany();
  const cleanedResult = cleanResults(result, clean);
  res.send(cleanedResult);
});

router.post("/", async (req: Request, res: Response) => {
  const result = validateStaff("post", req.body);
  if (!result.success)
    throw new CustomError(
      400,
      `${result.field} is ${result.message?.toLowerCase()}`
    );
  const { fullName, position, yearsOfService, monthlyWages, image } = result.body!;
  const bytes = Buffer.from(image!, 'base64')
  const staff = await prisma.staff.create({
    data: {
      full_name: fullName!,
      position: position!,
      years_of_service: yearsOfService!,
      monthly_wages: monthlyWages!,
      image: bytes!
    },
  });
  const cleanedResult = cleanResult(staff, clean);
  res.send(cleanedResult);
});

router.get("/:id", async (req: Request, res: Response) => {
  const staffId = parseInt(req.params.id);
  const staff = await prisma.staff.findUnique({
    where: {
      id: staffId,
    },
  });
  if (!staff)
    throw new CustomError(400, `staff member with id ${staffId} not found`);
  const cleanStaff = cleanResult(staff, clean);
  res.send(cleanStaff);
});

router.put("/:id", async (req: Request, res: Response) => {
  const staffId = parseInt(req.params.id);

  const data = cleanInputData(req.body);

  const result = validateStaff("put", data);

  if (!result.success)
    throw new CustomError(
      400,
      `${result.field} is ${result.message?.toLowerCase()}`
    );

    const updateData: Record<string, any> = { ...result.body! };

    if (typeof req.body.image === "string" && req.body.image.length > 0) {
      updateData.image = Buffer.from(req.body.image, "base64");
    }

  const staff = await prisma.staff.update({
    where: {
      id: staffId,
    },
    data: updateData,
  });

  const cleanStaff = cleanResult(staff, clean);
  res.send(cleanStaff);
});

export default router;
