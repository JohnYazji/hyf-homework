const express = require("express");
const router = express.Router();
const reviews = require("../data/reviews.json");

router.get("/reviews", (request, response) => {
  const reviewIS = reviews.filter(item => item.id == request.query.id);

  if (request.url === "/reviews") {
    response.json(reviews);
  } else if (reviewIS.length === 0) {
    response.send("Sorry, we did not find the review you are looking for");
  }
  response.json(reviewIS);
});

module.exports = router;
