import express from "express";
import cors from "cors";
import todoRouter from "./routes/todoRoutes.js";
import mongoose from "mongoose";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan());

mongoose.connect("mongodb://127.0.0.1:27017/todoDB");

app.use("/todos", todoRouter);

app.listen(5000, () => {
  console.log("Server started at port 5000.");
});
