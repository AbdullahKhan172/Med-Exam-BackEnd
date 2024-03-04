const express = require("express");
const app = express();
const bookingsRouter = require("./routes/bookingRouter");
const globalErrorHandler = require("./controllers/errorController");

var cors = require("cors");
app.use(cors());

app.use(express.json({ limit: "10kb" }));
app.use((req, res, next) => {
  console.log("Hello from the middleware!!");
  next();
});

app.use("/api/v1/bookings", bookingsRouter);
app.use(globalErrorHandler);
module.exports = app;
