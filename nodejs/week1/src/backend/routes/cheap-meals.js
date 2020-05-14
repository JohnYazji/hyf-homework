const express = require("express");
const router = express();

const meals = require ("../data/meals.json");
const reviews = require ("../data/reviews.json");
const cheapMeal = meals.filter(itemMeal => { 
if (itemMeal.price < 50) {
    return true;
  }
});

router.get("/cheap-meals", (request, response) => {
  response.json(cheapMeal);
});

module.exports = router;