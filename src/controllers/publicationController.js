import mongoose from "mongoose";
import publicationModel from "../models/Publication.js";

export const GetAllPublication = async (req, res) => {
  try {
    const publications = await publicationModel.find();
    res.json(publications);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error en obtener todas las publicaciones" });
  }
};

export const GetPublicationId = async (req, res) => {
  try {
    const publication = await publicationModel.findById(req.params.id);

    if (!publication) {
      return res.status(404).json({ message: "Publicacion no encontrada" });
    }
    res.json(publication);
  } catch (error) {
    res.status(500).json({ message: "Error al encontrar la publicacion" });
  }
};

export const CreatePublication = async (req, res) => {
  try {
    const publication = await publicationModel.create(req.body);
    res.status(201).json(publication);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la publicacion" });
  }
};
