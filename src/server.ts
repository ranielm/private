import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes"; // Importe suas rotas de usuário

const app: Application = express();

// Middleware para permitir solicitações de qualquer origem (CORS)
app.use(cors());

// Middleware para analisar o corpo das solicitações como JSON
app.use(bodyParser.json());

// Rotas de usuário
app.use("/api/users", userRoutes); // Use as rotas de usuário importadas

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
