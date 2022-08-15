const express = require("express");
require("dotenv").config();
const connectDB = require("./src/db/connect");
const logger = require("./logger");
const notFound = require("./src/routes/not-found");
const errorMiddleware = require("./src/middlewares/error-middleware");

const router = require("./src/routes/routes");

const app = express();

app.use(express.json());
app.use(logger);
app.use("/api", router);
app.use(errorMiddleware);
app.use(notFound);

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const connection = async () => {
  try {
    await connectDB(DB_URL);
    app.listen(5000, () => {
      console.log("Server is listending to port " + PORT);
    });
  } catch (err) {
    console.log("there is some issue", err);
  }
};

connection();
