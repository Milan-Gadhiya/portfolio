import express from "express";
import cors from "cors";
import "./config/mongoConnect.js";
import appsRouter from "./routes/appRouter.js";
import allDataRouter from "./routes/initialRouter.js";
import websiteRouter from "./routes/websitesRouter.js";

import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const app = express();

app.use(cors());

// APP ROUTER
app.use("/api/apps", appsRouter);

// WEBSITE ROUTER
app.use("/api/websites", websiteRouter);

// ALL INITIAL DATA
app.use("/api/", allDataRouter);

//MIDDLEWARE
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

// app.get('/', (req, res) =>{
//     res.send("Server is Ready Milla")
// })

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) =>{
  res.send(path.join(__dirname, 'client/build/index.html'));
})

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
