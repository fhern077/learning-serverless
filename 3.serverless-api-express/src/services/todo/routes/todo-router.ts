import { Router } from "express";
import TodoService from "../todo-service";

const router = Router();

// /api/todo
router.route("/").get(TodoService.retrieveAll);
// /api/todo:id
router.route("/:id").get(TodoService.retrieveOne);

export default router;
