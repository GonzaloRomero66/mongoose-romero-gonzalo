import { Router } from "express";
import {
  GetAllProfile,
  GetProfileId,
  CreateProfile,
  UpdateProfile,
  DeleteProfile,
} from "../controllers/profileController.js";

const router = Router();

router.get("/", GetAllProfile);
router.get("/:id", GetProfileId);
router.post("/", CreateProfile);
router.put("/:id", UpdateProfile);
router.delete("/:id", DeleteProfile);

export default router;
