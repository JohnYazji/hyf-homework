const express = require("express");
const router = express();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");
mealItem.review = [];

  review.forEach(reviewItem => {
    if (reviewItem.mealId === mealItem.id) {
      mealItem.review.push(reviewItem);
    }
  });
});

router.get("/meal", (request, response) => {
  response.json(meals[Math.floor(Math.random() * meals.length)]);
});

module.exports = router;