import app from "../app";
import cors from "cors";
import helmet from "helmet";
import express from 'express'

function middlewares(): void{
app.use(cors());
app.use(helmet());
app.use(express.json());
}

export default middlewares