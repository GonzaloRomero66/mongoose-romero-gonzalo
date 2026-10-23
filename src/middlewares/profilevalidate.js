import { body, param } from "express-validator";
import userModel from "../models/User.js";

export const validateCreateProfile = [
  body("username").notEmpty().withMessage("El username no puede estar vacio"),
  body("description")
    .notEmpty()
    .withMessage("La descripcion no puede estar vacia"),
  body("avatar").notEmpty().withMessage("El avatar no puede estar vacio"),
  body("user_id")
    .notEmpty()
    .withMessage("El id de usuario no puede estar vacio")
    .isMongoId()
    .withMessage("El id tiene que ser un id valido de mongo")
    .custom(async (user_id) => {
      const user = await userModel.findById(user_id);
      if (!user) {
        throw new Error("El usuario no existe");
      }
      return true;
    }),
];

export const validateUpdateProfile = [
  body("username")
    .optional()
    .notEmpty()
    .withMessage("El username no puede estar vacio"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("La descripcion no puede estar vacia"),
  body("avatar")
    .optional()
    .notEmpty()
    .withMessage("El avatar no puede estar vacio"),
  body("user_id")
    .optional()
    .notEmpty()
    .withMessage("El id no puede estar vacio")
    .isMongoId()
    .withMessage("El id tiene que ser un id valido de mongo")
    .custom(async (user_id) => {
      const user = await userModel.findById(user_id);

      if (!user) {
        throw new Error("El usuario no existe");
      }
      return true;
    }),
];

export const validateIdProfile = [
  param("id").isMongoId().withMessage("El id tiene que ser un id valido"),
];
