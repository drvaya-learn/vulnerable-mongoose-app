const mongoose = require('mongoose')

async function connect() {
  try {
    mongoose.connection.on("error", (err) => {
      console.log(err);
    });
    mongoose.connection.on("connecting", () => {
      console.log("Connecting to DB...");
    });
    mongoose.connect(process.env.DATABASE_URI || "mongodb://localhost:27017/db");
  } catch(err) {
    console.log(err)
  }
}

module.exports = connect