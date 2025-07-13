import { Express } from "express";
import patientsRouter from "../routes/patients";
import staffRouter from "../routes/staff";
import quesRoute from "../routes/ques";
import signInRoute from "../routes/signIns";
import roomsRouter from "../routes/rooms";
import healthCheck from "../routes/healthCheck";

function routes(app: Express): void {
  app.use("/api/patients", patientsRouter);
  app.use("/api/staff", staffRouter);
  app.use("/api/ques", quesRoute);
  app.use("/api/signIns", signInRoute);
  app.use("/api/rooms", roomsRouter);
  app.use("/api/healthCheck", healthCheck);
}

export default routes;
