import { model, Schema } from "mongoose"; //? Aqui estamos impotando de dentro do mongoose um método chamado model
//! importei também do mongoose o Schema que é para tipar o que vai ter no meu category

export const Category = model(
  //? vou executar o meu model o qual passe por agumento com nome de Category
  "Category",
  new Schema({
    //? usando o Schema que importei
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    }, //? tipando o Category
  })
);
