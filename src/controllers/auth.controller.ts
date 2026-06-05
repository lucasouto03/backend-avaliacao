import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const token = await authService.login(
        email,
        password
      );

      return res.json({ token });
    } catch (error) {
      return res.status(401).json({
        message: "Email ou senha inválidos"
      });
    }
  }
}