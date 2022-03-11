import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";

import authRouter from "./routes/auth/auth";
import usersRouter from "./routes/user/user";

const app:Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
  let currentTime = new Date();
  let time = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
  let date = currentTime.getDate() + "-" + (currentTime.getMonth() + 1)+ '-' + currentTime.getFullYear();
  console.log("\n");
  console.log(req.method, "-", req.path, "|", time, date);
  console.log("Body: ", req.body, "Query: ", req.query, "Params: ", req.params);
  next();
});
app.use("/auth", authRouter);
app.use("/users", usersRouter);

export default app;
