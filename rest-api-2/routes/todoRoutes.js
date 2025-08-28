import { Router } from "express";
import auth from "../middleware/auth.js";
import { list, create, update, remove } from "../controllers/todoController.js";

const routes = Router();
routes.use(auth);

routes.get("/", list); // GET    /api/todos
routes.post("/", create); // POST   /api/todos
routes.put("/:id", update); // PUT    /api/todos/:id
routes.delete("/:id", remove); // DELETE /api/todos/:id

export default routes;
