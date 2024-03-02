const express = require("express");
const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Database connection successfull!!");
  })
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Listening to the port 3000!");
});
