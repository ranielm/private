// Importe as dependências necessárias
import express, { Request, Response, Router } from "express";
import UserController from "../controllers/UserController"; // Importe o controlador de usuário como uma classe

// Crie um novo router do Express
const router: Router = express.Router();

// Rota para registrar um novo usuário (POST /api/users/register)
router.post("/register", (req: Request, res: Response) => {
  UserController.registerUser(req, res); // Use a instância do controlador para acessar o método
});

// Rota para obter informações de um usuário por ID (GET /api/users/:id)
router.get("/:id", (req: Request, res: Response) => {
  UserController.getUserById(req, res); // Use a instância do controlador para acessar o método
});

export default router;
