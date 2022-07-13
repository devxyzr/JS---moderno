import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import venterinarioRoutes from "./routes/veterinarioRoutes.js";

const app = express();
dotenv.config();

conectarDB();

app.use("/api/veterinarios", venterinarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Servidor funcionando en el puerto 4000");
}); // Puerto para backend
