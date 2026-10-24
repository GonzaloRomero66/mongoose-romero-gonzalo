import { Router } from "express";
import {
  GetAllUsers,
  GetUserId,
  CreateUser,
  UpdateUser,
  DeleteUser,
  AddPublicationToUser,
} from "../controllers/userController.js";

import {
  validateCreateUser,
  validateUpdateUser,
  validateIdUser,
  validateAddPublicationToUser,
} from "../middlewares/uservalidate.js";

import validate from "../middlewares/validate.js";

const router = Router();

router.get("/", GetAllUsers);
router.get("/:id", validateIdUser, validate, GetUserId);
router.post("/", validateCreateUser, validate, CreateUser);
router.post(
  "/:id/publications",
  validateIdUser,
  validateAddPublicationToUser,
  validate,
  AddPublicationToUser,
);
router.put("/:id", validateIdUser, validateUpdateUser, validate, UpdateUser);
router.delete("/:id", validateIdUser, validate, DeleteUser);

export default router;
