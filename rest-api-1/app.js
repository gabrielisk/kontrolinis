import express from "express";
import apiRoutes from "./routes/apiRoutes.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

// Kad header'e galėtume paryškinti aktyvią nuorodą
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// EJS puslapiai
app.get("/", (req, res) => res.render("home"));
app.get("/create", (req, res) => res.render("create"));
app.get("/update", (req, res) => res.render("update"));
app.get("/delete", (req, res) => res.render("delete"));

app.use("/api", apiRoutes);

const dbURI = "mongodb+srv://vcs:Test1234@vcs.fpqdkcz.mongodb.net/restapi";
mongoose
  .connect(dbURI)
  .then(() => app.listen(3002, () => console.log("Serveris ant 3002")))
  .catch((err) => console.log(err));
