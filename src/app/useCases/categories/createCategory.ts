import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function createCategory(req: Request, res: Response) {
  const { icon, name } = req.body; //? estou pegando o meu icon e meu name do req.body e passando para o meu create

  const category = await Category.create({ icon, name }); //? aqui eu vou criar a minha category e de onde vem as informações do nosso name e do nosso icon, ela vem de dentro do nosso body
  res.json(category); //? enviando a category que acabou de ser criada
}
