const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/finance");
  console.log("conectou ao mongoose");
}

main().catch((error) => console.log(error));

module.exports = mongoose;
