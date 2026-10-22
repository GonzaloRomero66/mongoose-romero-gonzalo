import mongoose from "mongoose";
import profileModel from "../models/Profile.js";

export const GetAllProfile = async (req, res) => {
  try {
    const profiles = await profileModel.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Error en obtener todos los perfiles" });
  }
};

export const GetProfileId = async (req, res) => {
  try {
    const profile = await profileModel.findById(req.params.id);

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
    const profile = await profileModel.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el perfil" });
  }
};
