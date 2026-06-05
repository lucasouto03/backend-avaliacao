import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();
const userController = new UserController();

router.post("/", (req, res) =>
  userController.create(req, res)
);

router.get(
  "/",
  authMiddleware,
  (req, res) => userController.findAll(req, res)
);

router.get(
  "/:id",
  authMiddleware,
  (req, res) => userController.findById(req, res)
);

router.put(
  "/:id",
  authMiddleware,
  (req, res) => userController.update(req, res)
);

router.patch(
  "/:id/password",
  authMiddleware,
  (req, res) => userController.updatePassword(req, res)
);

router.delete(
  "/:id",
  authMiddleware,
  (req, res) => userController.delete(req, res)
);

export default router;