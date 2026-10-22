import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./src/routes/userRoutes.js";
import profileRoutes from "./src/routes/profileRoutes.js";
// import publicationRoutes from "./src/routes/publicationRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("El servidor esta en funcionamiento");
  console.log(mongoose.connection.readyState);
} catch (error) {
  console.error("Error en conectar la base de datos", error);
}

app.use("/users", userRoutes);
app.use("/profile", profileRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor esta corriendo en el puerto ${PORT}`);
});
