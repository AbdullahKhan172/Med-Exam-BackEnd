const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.route("/").post(bookingController.newBooking);

module.exports = router;
