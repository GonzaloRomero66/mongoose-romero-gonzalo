import { Router } from "express";
import { GetAllUsers, GetUserId } from "../controllers/userController.js";

const router = Router();

router.get("/", GetAllUsers);
router.get("/:id", GetUserId);

export default router;
