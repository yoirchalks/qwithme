import express, { Request, Response } from "express";
import { prisma } from "../db/prisma";
import { CustomError } from "../utils/CustomError";
import validateStaff from "../validators/staff.validator";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const result = await prisma.staff.findMany();
  res.send(result);
});

router.post("/", async (req: Request, res: Response) => {
  const result = validateStaff(req.body);
  if (!result.success)
    throw new CustomError(
      400,
      `${result.field} is ${result.message?.toLowerCase()}`
    );
  const { fullName, position, yearsOfService, monthlyWages } = req.body;
  const staff = await prisma.staff.create({
    data:{
      full_name: fullName,
      position,
      years_of_service: yearsOfService,
      monthly_wages: monthlyWages
    }
  })
  res.send(staff)
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
  res.send(staff);
});

export default router;
