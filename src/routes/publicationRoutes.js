import { Router } from "express";
import {
  GetAllPublication,
  GetPublicationId,
  CreatePublication,
  UpdatePublication,
  DeletePublication,
} from "../controllers/publicationController.js";

const router = Router();

router.get("/", GetAllPublication);
router.get("/:id", GetPublicationId);
router.post("/", CreatePublication);
router.put("/:id", UpdatePublication);
router.delete("/:id", DeletePublication);

export default router;
