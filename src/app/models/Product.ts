import { model, Schema } from "mongoose"; //? Aqui estamos impotando de dentro do mongoose um método chamado model
//! importei também do mongoose o Schema que é para tipar o que vai ter no meu category

export const Product = model(
  //? vou executar o meu model o qual passe por agumento com nome de Category
  "Product",
  new Schema({
    //? usando o Schema que importei
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    igredients: {
      required: true,
      type: [
        {
          name: {
            type: String,
            required: true,
          },
          icon: {
            type: String,
            required: true,
          },
        },
      ],
    },
    category: {
      //? ela foi definida como um type ObjectId
      type: Schema.Types.ObjectId, //? pega o ObjectId do meu Schema
      required: true,
      ref: "Category", //? Aqui estou dizento que essa categoria de produto faz referência ao meu id de produto.
    },
    //? tipando o Category
  })
);
