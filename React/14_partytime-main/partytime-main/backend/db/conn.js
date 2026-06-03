const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://devGuedes:o5KB6ZFFTbPLtqeR@cluster0.0nyz505.mongodb.net/?appName=Cluster0"
    );

    console.log("Conectado!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
