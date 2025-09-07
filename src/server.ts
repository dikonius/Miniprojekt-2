import express from "express";
import type { Express, RequestHandler } from "express";
import filmRouter from "./routes/films.js";

const app: Express = express();
const port = 1337; 

const logger: RequestHandler = (req, res, next) => {
  console.log(`${req.method}  ${req.url}`, req.body);
  next();
};

app.use("/", express.json()); 
app.use("/", logger);
app.use("/films", filmRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
