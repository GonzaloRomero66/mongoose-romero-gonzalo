import { body, param } from "express-validator";
export const validateCreateUser = [
  body("username").notEmpty().withMessage("El username no puede estar vacio"),
  body("password").notEmpty().withMessage("La contraseña no puede estar vacia"),
  body("email")
    .notEmpty()
    .withMessage("El email no puede estar vacio")
    .isEmail()
    .withMessage("El email tiene que ser un email valido"),
  body("direccion.calle")
    .optional()
    .isString()
    .withMessage("La calle debe ser un texto")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("La calle no puede estar vacia"),

  body("direccion.localidad")
    .optional()
    .isString()
    .withMessage("La localidad debe ser un texto")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("La localidad no puede estar vacia"),

  body("direccion.provincia")
    .optional()
    .isString()
    .withMessage("La provincia debe ser un texto")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("La provincia no puede estar vacia"),
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
  body("direccion.calle")
    .optional()
    .isString()
    .withMessage("La calle debe ser un texto")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("La calle no puede estar vacia"),

  body("direccion.localidad")
    .optional()
    .isString()
    .withMessage("La localidad debe ser un texto")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("La localidad no puede estar vacia"),

  body("direccion.provincia")
    .optional()
    .isString()
    .withMessage("La provincia debe ser un texto")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("La provincia no puede estar vacia"),
];
export const validateIdUser = [
  param("id").isMongoId().withMessage("El id tiene que ser un id valido"),
];
