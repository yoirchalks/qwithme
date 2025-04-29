import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  const stack = err.stack;

  res.status(status).json({
    status,
    message,
    stack,
  });
}