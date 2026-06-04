import { prisma } from "../config/prisma";

export class UserService {
  async create(
    name: string,
    email: string,
    password: string
  ) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    });

    return user;
  }
}