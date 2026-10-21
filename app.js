import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { error } from "node:console";

dotenv.config();

const app = express();

app.use(express.json());

try {
  await mongoose.connect("mongodb://127.0.0.1:27017/trabajo");
  console.log("El servidor esta en funcionamiento");
  //   console.log(mongoose.connection.readyState);
} catch {
  console.error("Error en conectar la base de datos", error);
}

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor esta corriendo en el puerto ${PORT}`);
});
