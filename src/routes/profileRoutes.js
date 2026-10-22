import { Router } from "express";
import {
  GetAllProfile,
  GetProfileId,
  CreateProfile,
} from "../controllers/profileController.js";

const router = Router();

router.get("/", GetAllProfile);
router.get("/:id", GetProfileId);

export default router;
