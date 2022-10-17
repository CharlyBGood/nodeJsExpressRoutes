import express, { Router } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.routes.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(indexRoutes);

app.use(express.static(join(__dirname, "public")));

app.listen(process.env.PORT || 3000);
console.log("server listening on Port", process.env.PORT || 3000);

export default Router;
