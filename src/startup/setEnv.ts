import dotenv from "dotenv";
import path from "path";

export default function () {
  const ENV = process.env.NODE_ENV;
  dotenv.config({
    path: path.resolve(__dirname, `../env/${ENV}.env`),
  });
  console.log(`Loaded env: ${ENV}`);
}
