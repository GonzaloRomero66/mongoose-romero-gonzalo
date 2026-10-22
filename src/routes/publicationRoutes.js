import { Router } from "express";
import {
  GetAllPublication,
  GetPublicationId,
  CreatePublication,
} from "../controllers/publicationController.js";

const router = Router();

router.get("/", GetAllPublication);
router.get("/:id", GetPublicationId);
router.post("/", CreatePublication);

export default router;
