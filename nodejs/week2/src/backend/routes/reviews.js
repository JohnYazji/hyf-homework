const express = require("express");
const router = express();
const reviews = require("../data/reviews.json");
router.get("/reviews",(request,responsse) => {
    responsse.json(reviews);
})
  module.exports = router;