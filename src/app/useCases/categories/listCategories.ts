import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function lisCategories(req: Request, res: Response) {
  const categories = await Category.find();

  res.json(categories); //*para enviar no formato json esse array de categories
} //? com esses comandos já fomos no nosso banco de dados pegamos todos os documentos que temos dentro da collections dentro de category e já estão armazenadas dentro de categories
