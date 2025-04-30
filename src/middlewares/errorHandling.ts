import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (
    err instanceof Prisma.PrismaClientKnownRequestError &&
    err.code === "P2002"
  ) {
    // err.meta.target is array of column names
    const fields = (err.meta?.target ?? []) as string[];
    const errors: Record<string, string> = {};
    fields.forEach((f) => {
      errors[f] = `${f} must be unique.`;
    });
    // 409 Conflict for uniqueness errors
    return res.status(409).send({ errors });
  }

  // 2. Custom application errors (e.g. your CustomError)
  if (err.status && err.message) {
    return res.status(err.status).send({
      status: err.status,
      message: err.message,
    });
  }

  // 3. Fallback to Internal Server Error
  console.error("Unhandled error:", err);
  return res.status(500).send({
    status: 500,
    message: "Internal Server Error",
  });
}