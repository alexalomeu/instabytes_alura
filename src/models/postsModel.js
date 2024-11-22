import conectarAoBanco from "../config/dbConfig.js";

// Conectando ao banco de dados utilizando a string de conexão armazenada na variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona para buscar todos os posts no banco de dados.
export async function getTodosPosts() {
  // Acessando o banco de dados chamado "imersaoinstabytes".
  const db = conexao.db("imersaoinstabytes");
  // Acessando a coleção "posts" dentro do banco de dados.
  const colecao = db.collection("posts");
  // Retornando todos os posts como um array.
  return colecao.find().toArray()
}

export async function criarPost(novoPost) {
  const db = conexao.db("imersaoinstabytes");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost)
}