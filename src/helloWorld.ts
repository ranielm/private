import express, { Request, Response } from "express";

// Crie uma instância do Express
const app = express();
const port = 3000; // Porta em que o servidor será executado

// Defina uma rota de exemplo
app.get("/", (req: Request, res: Response) => {
  res.send("Olá, mundo! Este é um servidor Express.js com TypeScript.");
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor Express está ouvindo na porta ${port}`);
});
