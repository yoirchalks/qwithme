import cors from "cors";
import helmet from "helmet";
import express from 'express'
import { Express } from "express";

function middlewares(app: Express): void{
app.use(cors());
app.use(helmet());
app.use(express.json());
}

export default middlewares