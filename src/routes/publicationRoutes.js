import { Router } from "express";
import {
  GetAllPublication,
  GetPublicationId,
  CreatePublication,
  UpdatePublication,
  DeletePublication,
} from "../controllers/publicationController.js";

import {
  validateCreatePublication,
  validateUpdatePublication,
  validateIdPublication,
} from "../middlewares/publicationvalidate.js";

import validate from "../middlewares/validate.js";

const router = Router();

router.get("/", GetAllPublication);
router.get("/:id", validateIdPublication, validate, GetPublicationId);
router.post("/", validateCreatePublication, validate, CreatePublication);
router.put(
  "/:id",
  validateIdPublication,
  validateUpdatePublication,
  validate,
  UpdatePublication,
);
router.delete("/:id", validateIdPublication, validate, DeletePublication);

export default router;
