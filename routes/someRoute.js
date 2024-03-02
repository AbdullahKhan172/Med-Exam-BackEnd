const express = require("express");

const router = express.Router();

router.route("/").get((req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "This is the response from the api!!",
  });
});

module.exports = router;
