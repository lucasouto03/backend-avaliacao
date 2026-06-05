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

  async findAll(page: number, limit: number) {
    const users = await prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    return users;
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id }
    });

    return user;
  }

  async update(
    id: string,
    name: string,
    email: string
  ) {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        email
      }
    });

    return user;
  }

  async delete(id: string) {
    await prisma.user.delete({
      where: { id }
    });
  }
  async updatePassword(
  id: string,
  password: string
) {
  const user = await prisma.user.update({
    where: { id },
    data: {
      password
    }
  });

  return user;
}
}