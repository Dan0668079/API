import { model, Schema } from "mongoose"; //? Aqui estamos impotando de dentro do mongoose um método chamado model
//! importei também do mongoose o Schema que é para tipar o que vai ter no meu category

export const Order = model(
  //? vou executar o meu model o qual passe por agumento com nome de Category
  "Order",
  new Schema({
    //? usando o Schema que importei
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["WAITING", "IN_PRODUCTION", "DONE"], //? criando um enum só poderá receber as 3 opçõe, e como default "WAITING"
      default: "WAITING",
    },
    createdAt: {
      type: Date,
      default: Date.now, //? para pegar o exato segundo que o produto for cadastrado
    },
    products: {
      required: true,
      type: [
        {
          product: {
            //? ela foi definida como um type ObjectId
            type: Schema.Types.ObjectId, //? pega o ObjectId do meu Schema
            required: true,
            ref: "Product",
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
  })
);
