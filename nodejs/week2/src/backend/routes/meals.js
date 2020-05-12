const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const validator = require("validator");

router.get("/meals", (request, response) => {
  const id = request.query.id;
  const yourMeal = meals.filter(item => item.id == id);

  const maxPrice = meals.filter(item => {
    const max = parseInt(request.query.maxPrice);
    return max > item.price;
  });

  const mealCreatedAfter = meals.filter(item => {
    const createdAfter = request.query.createdAfter;
    return createdAfter < item.createdAt;
  });

  const mealTitle = meals.filter(item => {
    const title = request.query.title;
    return title === item.title;
  });

  const mealsLimited = meals.filter(item => {
    const limit = parseInt(request.query.limit);
    return meals.indexOf(item) < limit;
  });

  if (request.query.id) {
    if (!validator.isNumeric(id)) {
      response.send("Kindly make sure to search for a number as an id");
    } else if (yourMeal.length === 0) {
      response.send("We cant find your meal");
    } else {
      response.json(yourMeal);
    }
  }

  if (request.query.limit) {
    response.json(mealsLimited);
  } else if (request.query.createdAfter) {
    response.json(mealCreatedAfter);
  } else if (request.query.title) {
    response.json(mealTitle);
  } else if (request.url === "/meals") {
    response.json(meals);
  } else if (request.query.maxPrice) {
    response.json(maxPrice);
  } else {
    response.send("Make sure that you are using the correct format");
  }
});

module.exports = router;
