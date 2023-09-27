// UserController.ts

import { Request, Response } from "express";
import UserModel from "../models/UserModel";

class UserController {
  public registerUser(req: Request, res: Response): void {
    const { username, password } = req.body;

    // Verifique se o usuário já existe
    const existingUser = UserModel.findByUsername(username);
    if (existingUser) {
      res.status(400).json({ message: "O nome de usuário já está em uso." });
      return;
    }

    // Crie um novo usuário
    const newUser = UserModel.addUser({ username, password });

    // Retorne o novo usuário criado (você pode personalizar a resposta conforme necessário)
    res.status(201).json(newUser);
  }

  public getUserById(req: Request, res: Response): void {
    const userId = parseInt(req.params.id, 10);

    // Encontre o usuário pelo ID
    const user = UserModel.findById(userId);

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado." });
      return;
    }

    // Retorne as informações do usuário
    res.json(user);
  }
}

export default new UserController();
