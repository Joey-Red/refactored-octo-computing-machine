import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import { posts, test_users } from "./sample_data";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 999;

app.use(cors());
app.use(bodyParser.json());

app.get("/users", (req: Request, res: Response) => {
  // res.send("Hello from TypeScript Express!");
  console.log("users");
  res.send(test_users);
});

app.get("/posts", (req: Request, res: Response) => {
  // res.send("Hello from TypeScript Express!");
  console.log("hit posts");
  res.send(posts);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
