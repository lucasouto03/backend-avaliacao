import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token não informado"
    });
  }

  try {
    const token = authHeader.replace("Bearer ", "");

    jwt.verify(token, "secret_key");

    next();
  } catch {
    return res.status(401).json({
      message: "Token inválido"
    });
  }
}