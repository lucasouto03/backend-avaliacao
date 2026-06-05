import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma";

export class AuthService {
  async login(
    email: string,
    password: string
  ) {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    if (user.password !== password) {
      throw new Error("Senha inválida");
    }

    const token = jwt.sign(
      { userId: user.id },
      "secret_key",
      {
        expiresIn: "1d"
      }
    );

    return token;
  }
}