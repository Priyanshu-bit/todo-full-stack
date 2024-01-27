import express from "express";
import cors from "cors";
import todoRouter from "./routes/todoRoutes.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const app = express();

const corsOptions = {
  origin: "https://todo-fe-l5xj.onrender.com",
  AccessControlAllowOrigin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));

app.use(express.json());

mongoose.connect(MONGODB_URL);

app.use("/todos", todoRouter);

app.listen(5000, () => {
  console.log("Server started at port 5000.");
});
