import "dotenv/config";
import express from "express";
import path from "path";

import router from "./router/index.routes.js";
// pour tester la connexion à la BDD avec la méthode getConnection
// à supprimer après le test
// import pool from "./config/db.js";

const app = express();
const PORT = process.env.LOCAL_PORT;

// config de moteur de template
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/view"));
// config de dossier statique
app.use("/css", express.static(path.join(process.cwd(), "public/css")));
app.use("/img", express.static(path.join(process.cwd(), "public/img")));

//
app.use(router);

app.listen(9000, () =>
  console.log(`serveur is running at http://localhost:${PORT}`)
);
