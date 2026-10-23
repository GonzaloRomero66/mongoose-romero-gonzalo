import { matchedData } from "express-validator";
import profileModel from "../models/Profile.js";

export const GetAllProfile = async (req, res) => {
  try {
    const profiles = await profileModel.find().populate("user_id");
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Error en obtener todos los perfiles" });
  }
};

export const GetProfileId = async (req, res) => {
  try {
    const profile = await profileModel
      .findById(req.params.id)
      .populate("user_id");

    if (!profile) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Error al encontrar el perfil" });
  }
};

export const CreateProfile = async (req, res) => {
  try {
    const data = matchedData(req, { locations: ["body"] });
    const profile = await profileModel.create(data);
    res.status(201).json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el perfil" });
  }
};

export const UpdateProfile = async (req, res) => {
  try {
    const data = matchedData(req, { locations: ["body"] });
    const profile = await profileModel.findByIdAndUpdate(req.params.id, data, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!profile) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }
    res.status(200).json({
      message: "Perfil actualizado correctamente",
      profile,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el perfil" });
  }
};

export const DeleteProfile = async (req, res) => {
  try {
    const profile = await profileModel.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }
    res.status(200).json({
      message: "Perfil eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el perfil" });
  }
};
