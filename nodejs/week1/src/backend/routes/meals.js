const express = require("express");
const router = express();

const meals = require("../data/meals.json");
const review = require("../data/reviews.json");

meals.forEach(mealItem => {
  mealItem.review = [];
review.forEach(reviewItem => {
    if (reviewItem.mealId === mealItem.id) {
      mealItem.review.push(reviewItem);
    }
  });
});

router.get("/meals", (request, response) => {
  response.json(meals);
});

module.exports = router;