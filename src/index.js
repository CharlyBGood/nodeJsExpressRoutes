import express, { Router } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.routes.js"

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(indexRoutes);

app.listen(3000);
console.log("server listening on Port", 3000);

export default Router;
