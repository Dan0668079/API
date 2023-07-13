import { Router } from "express"; //!começar im portando o router do meu express

export const router = Router(); //! exportar as minhas rotas

//? List category
//!usando o rest
router.get("/categories", (req, res) => {
  //? get pegar o item especifico  edpoint que é o nome da rota categories sempre no plural, vamos receber do express o objetot de request req que onde eu vou receber as informações de quem esta fazendo as requisições e o objeto de response que é aonde eu tenho por exemplo o método send que é para quando eu quero enviar uma informação de volta para quem fez a request
  res.send("OK");
});
//? Create category
router.post("/categories", (req, res) => {
  //? para criar uma categoria a gente vai precisar receber informações de quem esta fazendo esta requisição então usamos o metodo post ou seja inserindo um novo registro
  res.send("OK");
});
//? List products
router.get("/products", (req, res) => {
  res.send("OK");
});
//? Create products
router.post("/products", (req, res) => {
  res.send("OK");
});
//? Det products by category
router.post("/categories/:categoryId/products", (req, res) => {
  //? Aqui eu estou listando todos los products de uma determinada categoria
  res.send("OK");
});
//? List orders
router.get("/orders", (req, res) => {
  res.send("OK");
});
//? Create order
router.post("/orders", (req, res) => {
  res.send("OK");
});
//? Change order status
router.patch("/orders/:orderId", (req, res) => {
  //?usamos o metodo patch, pois estou fazendo alterações dentro do meu banco de dados de forma parcial se fosse completa usaria o put
  res.send("OK");
});
//? Dele/cancel order status
router.delete("/orders/:orderId", (req, res) => {
  res.send("OK");
});
