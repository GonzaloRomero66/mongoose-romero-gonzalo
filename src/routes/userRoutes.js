import { Router } from "express";
import {
  GetAllUsers,
  GetUserId,
  CreateUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/userController.js";

import {
  validateCreateUser,
  validateUpdateUser,
  validateIdUser,
} from "../middlewares/uservalidate.js";

import validate from "../middlewares/validate.js";

const router = Router();

router.get("/", GetAllUsers);
router.get("/:id", validateIdUser, validate, GetUserId);
router.post("/", validateCreateUser, validate, CreateUser);
router.put("/:id", validateIdUser, validateUpdateUser, validate, UpdateUser);
router.delete("/:id", validateIdUser, validate, DeleteUser);

export default router;
