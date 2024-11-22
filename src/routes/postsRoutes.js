import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postController.js";

const routes = (app) => {
  // Usando o middleware para que o Express consiga ler e interpretar dados no formato JSON.
  app.use(express.json());

  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
}


export default routes;