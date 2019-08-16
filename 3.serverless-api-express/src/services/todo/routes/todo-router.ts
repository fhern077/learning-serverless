import { Router } from "express";
import TodoService from "../todo-service";

const router = Router();
const todoService = TodoService.getInstance();

// /api/todo
router.get("/", (_req, res)=>{
  const todos = await todoService.retrieveAll();
  res.send(todos);
});
// /api/todo:id
router.route("/:id").get(TodoService.retrieveOne);

export default router;
