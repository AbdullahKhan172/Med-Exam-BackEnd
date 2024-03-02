const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Hello from the middleware!!");
  next();
});

app.use("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "This is the response from the api",
  });
});

module.exports = app;
