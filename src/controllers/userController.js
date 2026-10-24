import { matchedData } from "express-validator";
import userModel from "../models/User.js";
import profileModel from "../models/Profile.js";
import publicationModel from "../models/Publication.js";
export const GetAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().populate("publications");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error en obtener todos los usuarios" });
  }
};

export const GetUserId = async (req, res) => {
  try {
    const user = await userModel
      .findById(req.params.id)
      .populate("publications");

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al encontrar el usuario" });
  }
};

export const CreateUser = async (req, res) => {
  try {
    const data = matchedData(req, { locations: ["body"] });
    const user = await userModel.create(data);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const data = matchedData(req, { locations: ["body"] });
    const user = await userModel.findByIdAndUpdate(req.params.id, data, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json({
      message: "Usuario actualizado correctamente",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el usuario" });
  }
};

export const DeleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        deleted: true,
      },
      { returnDocument: "after" },
    );
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const profile = await profileModel.findOneAndUpdate(
      { user_id: user._id },
      { deleted: true },
      { returnDocument: "after" },
    );
    if (profile) {
      await publicationModel.updateMany(
        { profile_id: profile._id },
        { deleted: true },
      );
    }
    res.status(200).json({
      message: "Usuario eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el usuario" });
  }
  ///
  ///
  ///
  ///
  ///
  ///
  ///
};
export const AddPublicationToUser = async (req, res) => {
  try {
    const data = matchedData(req, { locations: ["body"] });

    const user = await userModel.findById(req.params.id);

    if (!user || user.deleted) {
      return res.status(404).json({
        message: "Usuario no encontrado o eliminado",
      });
    }

    const publication = await publicationModel.findById(data.publication_id);

    if (!publication || publication.deleted) {
      return res.status(404).json({
        message: "Publicación no encontrada o eliminada",
      });
    }

    const exists = user.publications.some(
      (id) => id.toString() === publication._id.toString(),
    );

    if (exists) {
      return res.status(400).json({
        message: "La publicación ya está relacionada con el usuario",
      });
    }

    user.publications.push(publication._id);
    await user.save();

    res.status(200).json({
      message: "Publicación relacionada correctamente",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al relacionar la publicación con el usuario",
    });
  }
};
