import { body, param } from "express-validator";
import profileModel from "../models/Profile";

export const validateCreatePublication = [
  body("title").notEmpty().withMessage("El titulo no puede estar vacio"),
  body("Photo").notEmpty().withMessage("La foto no puede estar vacia"),
  body("description")
    .notEmpty()
    .withMessage("La descripcion no puede estar vacia"),
  body("profile_id")
    .notEmpty()
    .withMessage("El id de perfil no puede estar vacio")
    .isMongoId()
    .withMessage("El id tiene que ser un id valido de mongo")
    .custom(async (profile_id) => {
      const profile = profileModel.findById(profile_id);

      if (!profile) {
        throw new Error("El perfil no encontrado");
      }
      return true;
    }),
];

export const validateUpdatePublication = [
  body("title")
    .optional()
    .notEmpty()
    .withMessage("El titulo no puede estar vacio"),
  body("Photo")
    .optional()
    .notEmpty()
    .withMessage("La foto no puede estar vacia"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("La descripcion no puede estar vacia"),
  body("profile_id")
    .optional()
    .notEmpty()
    .withMessage("El id de perfil no puede estar vacio")
    .isMongoId()
    .withMessage("El id tiene que ser un id valido de mongo")
    .custom(async (profile_id) => {
      const profile = profileModel.findById(profile_id);
      if (!profile) {
        throw new Error("El perfil no existe");
      }
      return true;
    }),
];

export const validateIdPublication = [
  param("id").isMongoId().withMessage("El id tiene que ser un id valido"),
];
