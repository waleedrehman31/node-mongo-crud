require("dotenv").config();

const express = require("express");
const connect = require("./connect");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const { client } = connect();
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
