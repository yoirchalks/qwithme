import express from "express";
import 'express-async-errors'
import middlewares from "./startup/headers";
import dotenv from "dotenv";
import routes from "./startup/routes";
dotenv.config();
import { errorHandler } from "./middlewares/errorHandling";

const app = express();
middlewares(app)
routes(app)
app.use(errorHandler)


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening @ port ${port}`);
});

export default app;
