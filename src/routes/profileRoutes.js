import { Router } from "express";
import {
  GetAllProfile,
  GetProfileId,
  CreateProfile,
  UpdateProfile,
  DeleteProfile,
} from "../controllers/profileController.js";

import {
  validateCreateProfile,
  validateUpdateProfile,
  validateIdProfile,
} from "../middlewares/profilevalidate.js";

import validate from "../middlewares/validate.js";

const router = Router();

router.get("/", GetAllProfile);
router.get("/:id", validateIdProfile, validate, GetProfileId);
router.post("/", validateCreateProfile, validate, CreateProfile);
router.put(
  "/:id",
  validateIdProfile,
  validateUpdateProfile,
  validate,
  UpdateProfile,
);
router.delete("/:id", validateIdProfile, validate, DeleteProfile);

export default router;
