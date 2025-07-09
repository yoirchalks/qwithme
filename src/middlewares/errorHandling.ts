// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);

  if (err instanceof PrismaClientKnownRequestError && err.code === "P2002") {
    const fields = (err.meta?.target ?? []) as string[];
    const errors: Record<string, string> = {};
    fields.forEach((f) => {
      errors[f] = `${f} must be unique.`;
    });
    res.status(409).send(errors);
    return;
  }

  if (err.status && err.message) {
    res.status(err.status).json({ message: err.message });
    return;
  }

  res.status(500).send(err);
}
