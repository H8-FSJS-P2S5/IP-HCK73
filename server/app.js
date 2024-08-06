require("dotenv").config();

const express = require("express");
const port = 3000;
const app = express();
const cors = require("cors");
const router = require("./routers");
const errorHandler = require("./middleware/errorhandler");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
