import { Router } from "express";
import {
  GetAllUsers,
  GetUserId,
  CreateUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/userController.js";

const router = Router();

router.get("/", GetAllUsers);
router.get("/:id", GetUserId);
router.post("/", CreateUser);
router.put("/:id", UpdateUser);
router.delete("/:id", DeleteUser);

export default router;
