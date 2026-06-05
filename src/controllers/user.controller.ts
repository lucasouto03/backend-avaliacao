import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = await userService.create(
      name,
      email,
      password
    );

    return res.status(201).json(user);
  }

  async findAll(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const users = await userService.findAll(
      page,
      limit
    );

    return res.json(users);
  }

  async findById(req: Request, res: Response) {
    const id = req.params.id as string;

    const user = await userService.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "Usuário não encontrado"
      });
    }

    return res.json(user);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id as string;

    const { name, email } = req.body;

    const user = await userService.update(
      id,
      name,
      email
    );

    return res.json(user);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id as string;

    await userService.delete(id);

    return res.status(204).send();
  }
  async updatePassword(req: Request, res: Response) {
  const id = req.params.id as string;

  const { password } = req.body;

  const user = await userService.updatePassword(
    id,
    password
  );

  return res.json(user);
}
}