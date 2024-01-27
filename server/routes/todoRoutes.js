import { Router } from "express";
import { addTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/todoController.js";

const todoRouter = Router();

todoRouter.get('/', getAllTodos);
todoRouter.post("/", addTodo);
todoRouter.put("/:id", updateTodo);
todoRouter.delete("/:id", deleteTodo);


export default todoRouter;