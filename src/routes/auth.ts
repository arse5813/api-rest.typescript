import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";
import { logMiddleware } from "../middleware/log";

const router = Router();
router.post("/register",logMiddleware, registerCtrl);
router.post("/login", logMiddleware, loginCtrl);

export { router };