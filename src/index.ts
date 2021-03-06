import * as express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
