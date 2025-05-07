import dotenv from "dotenv";
import path from "path";

export default function () {
  const ENV = process.env.NODE_ENV;
  dotenv.config({
    path: path.resolve(process.cwd(), `../env/${ENV}.env`),
  });
  console.log(`Loaded env: ${ENV}`);
}
