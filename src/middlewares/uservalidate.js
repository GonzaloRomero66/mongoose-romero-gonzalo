import { body, param } from "express-validator";
export const validateCreateUser = [
  body("username").notEmpty().withMessage("El username no puede estar vacio"),
  body("password").notEmpty().withMessage("La contraseña no puede estar vacia"),
  body("email")
    .notEmpty()
    .withMessage("El email no puede estar vacio")
    .isEmail()
    .withMessage("El email no puede estar vacio"),
];

export const validateUpdateUser = [
  body("username")
    .optional()
    .notEmpty()
    .withMessage("El username no puede estar vacio"),
  body("password")
    .optional()
    .notEmpty()
    .withMessage("La contraseña no puede estar vacia"),
  body("email")
    .optional()
    .notEmpty()
    .withMessage("El email no puede estar vacio")
    .isEmail()
    .withMessage("El email tiene que ser un email valido"),
];
export const validateIdUser = [
  param("id").isMongoId().withMessage("El id tiene que ser un id valido"),
];
