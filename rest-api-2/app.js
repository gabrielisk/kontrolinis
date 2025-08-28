import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("home"));
app.get("/login", (req, res) => res.render("login"));
app.get("/register", (req, res) => res.render("register"));
app.get("/todos", (req, res) => res.render("todos"));

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

await mongoose.connect(process.env.URI);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Serveris veikia ant " + PORT));
