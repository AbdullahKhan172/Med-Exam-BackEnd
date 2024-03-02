const express = require("express");
const app = express();
const someRouter = require("./routes/someRoute");

var cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  console.log("Hello from the middleware!!");
  next();
});

app.use("/", someRouter);

module.exports = app;
