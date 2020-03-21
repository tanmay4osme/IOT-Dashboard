const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", api);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
