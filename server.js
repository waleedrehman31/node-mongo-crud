require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let databaseUrl = process.env.DATABASE_URL;
let caCert = process.env.CA_CERT;

if (!databaseUrl) throw new Error("Please enter a DATABASE_URL");
if (!caCert) throw new Error("Please enter a CA_CERT");

console.log(databaseUrl);
console.log(caCert);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
