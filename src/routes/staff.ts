import express, { Request, Response } from "express";
import { prisma } from "../db/prisma";
import { CustomError } from "../utils/CustomError";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const result = await prisma.staff.findMany();
  res.send(result);
});

router.post("/", async (req: Request, res: Response) => {
 
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
