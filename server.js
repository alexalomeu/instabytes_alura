// Importando o módulo express e a função json para parse de JSON.
import express, { json } from "express";
import routes from "./src/routes/postsRoutes.js";

// Criando uma instância do express para iniciar o servidor.
const app = express();
routes(app)

// Iniciando o servidor na porta 3000 e logando uma mensagem quando o servidor estiver ativo.
app.listen(3000, () => {
  console.log("Servidor escutando...");
});