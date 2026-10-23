import { body, param } from "express-validator";

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
    .withMessage("El id tiene que ser un id valido de mongo"),
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
    .withMessage("El id tiene que ser un id valido de mongo"),
];

export const validateIdPublication = [
  param("id").isMongoId().withMessage("El id tiene que ser un id valido"),
];
