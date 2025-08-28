import { Router } from "express";
import { register, login } from "../controllers/authController.js";

const routes = Router();
routes.post("/register", register);
routes.post("/login", login);

export default routes;
