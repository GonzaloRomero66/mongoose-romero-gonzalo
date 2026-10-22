import mongoose from "mongoose";

export const GetAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error en obtener todos los usuarios" });
  }
};

export const UserId = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);

    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al encontrar el usuario" });
  }
};
