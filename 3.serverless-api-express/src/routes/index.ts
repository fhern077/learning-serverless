import { Router, Request, Response } from "express";

import todoRouter from "../services/todo/routes/todo-router";

const router = Router();

//API Routes
router.use("/api/todo", todoRouter);

// If no API routes are hit, send the React app
router.use((_req: Request, res: Response) => {
  res.status(404).json({ msg: "resource not found or invalid path" });
});

export default Router;
