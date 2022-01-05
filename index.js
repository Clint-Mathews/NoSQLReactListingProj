import express from "express";
import cors from "cors";
import morgan from "morgan";
import fetch from "node-fetch";
import dotenv from "dotenv";

// const cors = require("cors");
// const morgan = require("morgan");
// const fetch = require("node-fetch");
dotenv.config();
const PORT = process.env.REACT_APP_PORT;
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// get all the restaurants data
app.get("/restaurants", (req, res) => {
  const url = process.env.ENDPOINT;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": process.env.ASTRA_TOKEN,
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((json) => res.json(json))
    .catch((error) => console.log(`Errors : ${error}`));
});
function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not Found");
  next(error);
}
function errorHandler(error, req, res) {
  res.status(req.statusCode || 500);
  res.json({
    message: error.message,
  });
}
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
