const mongoose = require("mongoose");
const validator = require("validator");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A booking must have a name"],
  },
  email: {
    type: String,
    required: [true, "A Booking must have an email"],
    unique: true,
    lowercase: true, //this is not a validator.....this will just convert the email into lover case
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  date: {
    type: Date,
    required: [true, "A Booking must have an date"],
  },
});

const Bookings = mongoose.model("Bookings", bookingSchema);
module.exports = Bookings;
