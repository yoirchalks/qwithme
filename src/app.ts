import express from "express";
import "express-async-errors";
import setUpSockets from "./startup/sockets";
import middlewares from "./startup/headers";
import routes from "./startup/routes";
import { errorHandler } from "./middlewares/errorHandling";
import dotenv from "dotenv";
import path from "path";

const ENV = process.env.NODE_ENV;
dotenv.config({
  path: path.resolve(__dirname, `../env/${ENV}.env`),
});
console.log(`Loaded env: ${ENV}`);

const app = express();
const server = setUpSockets(app);
middlewares(app);
routes(app);
app.use(errorHandler);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`server listening @ port ${port}`);
});

export default app;
