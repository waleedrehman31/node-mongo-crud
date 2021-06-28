const mongoose = require("mongoose");
const fs = require("fs");

let databaseUrl = process.env.DATABASE_URL;
let caCert = process.env.CA_CERT;

if (!databaseUrl) throw new Error("Please enter a DATABASE_URL");
if (!caCert) throw new Error("Please enter a CA_CERT");

let cachedClient;

module.exports = async function connect() {
  if (cachedClient) return { client: cachedClient };

  fs.writeFileSync("./ca-certificate.crt", caCert);
  const client = await mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tlsCAFile: "./ca-certificate.crt",
  });

  cachedClient = client;
  return { client };
};
