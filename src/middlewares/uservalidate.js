import { body, param } from "express-validator";
import mongoose from "mongoose";
import userModel from "../models/User.js";
import publicationModel from "../models/Publication.js";

export const validateAddPublicationToUser = [
  body("publication_id")
    .notEmpty()
    .withMessage("El id de la publicacion es obligatorio")
    .bail()
    .isMongoId()
    .withMessage("El id de la publicacion no es valido")
    .bail()
    .custom(async (publication_id, { req }) => {
      const publication = await publicationModel.findById(publication_id);

      if (!publication || publication.deleted) {
        throw new Error("La publicacion no existe o esta eliminada");
      }

      if (!mongoose.isValidObjectId(req.params.id)) {
        return true;
      }

      const user = await userModel.findById(req.params.id);

      if (!user || user.deleted) {
        throw new Error("El usuario no existe o esta eliminado");
      }

      const exists = user.publications.some(
        (id) => id.toString() === publication._id.toString(),
      );

      if (exists) {
        throw new Error("La publicacion ya esta relacionada con el usuario");
      }

      return true;
    }),
];

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
