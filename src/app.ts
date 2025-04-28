import express from "express";
import middlewares from "./startup/headers";
import dotenv from "dotenv";
import routes from "./startup/routes";
dotenv.config();

const app = express();
middlewares()
routes(app)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening @ port ${port}`);
});

export default app;
