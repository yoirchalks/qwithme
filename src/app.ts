import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import routes from "./startup/routes";
dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

routes(app)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening @ port ${port}`);
});

export default app;
