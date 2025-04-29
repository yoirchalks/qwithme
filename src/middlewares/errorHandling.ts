import { Request, Response, NextFunction } from "express";

interface HttpError{
    status?: number,
    message: string,
    path: string
}

function errorHandler (err: HttpError, req: Request, res: Response, next: NextFunction) {
    const status = err.status || 500;
    res.status(status).send({ message: err.message });
  };