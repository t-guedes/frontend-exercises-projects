require("dotenv").config();

const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD;

    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.0nyz505.mongodb.net/?appName=Cluster0`
    );

    console.log("Conectado!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;