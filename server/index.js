import express from "express";
import cors from "cors";
import todoRouter from "./routes/todoRoutes.js";
import mongoose from "mongoose";
import morgan from "morgan";

const app = express();

const corsOptions = {
  origin: "https://todo-fe-l5xj.onrender.com",
  AccessControlAllowOrigin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(morgan());

mongoose.connect("mongodb://127.0.0.1:27017/todoDB");

app.use("/todos", todoRouter);

app.listen(5000, () => {
  console.log("Server started at port 5000.");
});
