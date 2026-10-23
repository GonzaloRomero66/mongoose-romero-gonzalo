import { matchedData } from "express-validator";
import publicationModel from "../models/Publication.js";

export const GetAllPublication = async (req, res) => {
  try {
    const publications = await publicationModel.find().populate("profile_id");
    res.json(publications);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error en obtener todas las publicaciones" });
  }
};

export const GetPublicationId = async (req, res) => {
  try {
    const publication = await publicationModel
      .findById(req.params.id)
      .populate("profile_id");

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
    const data = matchedData(req, { locations: ["body"] });
    const publication = await publicationModel.create(data);
    res.status(201).json(publication);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la publicacion" });
  }
};

export const UpdatePublication = async (req, res) => {
  try {
    const data = matchedData(req, { locations: ["body"] });
    const publication = await publicationModel.findByIdAndUpdate(
      req.params.id,
      data,
      {
        returnDocument: "after",
        runValidators: true,
      },
    );
    if (!publication) {
      return res.status(404).json({ message: "Publicacion no encontrada" });
    }
    res.status(200).json({
      message: "Publicacion actualizada correctamente",
      publication,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la publicacion" });
  }
};

export const DeletePublication = async (req, res) => {
  try {
    const publication = await publicationModel.findByIdAndDelete(req.params.id);
    if (!publication) {
      return res.status(404).json({ message: "Publicacion no encontrada" });
    }
    res.status(200).json({
      message: "Publicacion eliminada correctamente",
    });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la publicacion" });
  }
};
