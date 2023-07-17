import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose.connect("mongodb://localhost:27017").then(() => {
  const app = express();
  const port = 3001;

  app.use(express.json()); //! importante sempre antes das minhas rotas função para transformar os textos da aplicação em formato json.
  app.use(router);

  app.listen(port, () => {
    console.log(`🚀 server is running on http://localhost:${port}`);
  });
});
