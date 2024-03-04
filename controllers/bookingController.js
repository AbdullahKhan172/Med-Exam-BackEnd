const Bookings = require("../model/bookingModel");
const catchAsync = require("../utils/catchAsync");
exports.newBooking = catchAsync(async (req, res, next) => {
  const newBooking = await Bookings.create({
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
  });

  res.status(201).json({
    status: "success",
    data: {
      booking: newBooking,
    },
  });
});
