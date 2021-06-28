const mongoose = require("mongoose");
const fs = require("fs");

let uri = process.env.MONGODB_DB;
let cert = process.env.CA_CERT;
let cachedClient;

module.exports = async function connect() {
  if (cachedClient) return { client: cachedClient };

  fs.writeFileSync("./ca-certificate.crt", cert);
  const client = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tlsCAFile: "./ca-certificate.crt",
  });

  cachedClient = client;
  return { client };
};
