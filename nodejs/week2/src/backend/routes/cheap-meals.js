const cheapMeals = function (req, res) {
  const mealsJson = require('../data/meals.json'); 
  const reviewJson = require('../data/reviews.json');    
  const cheapMealArr = mealsJson.filter((item) =>  {
      return item.price < 50;
    });
  const cheapReview = mealsJson.map((cor) => {
        return cor.review = reviewJson.filter((item) => {
         if (cor.id === item.mealID) {
            return item.mealID === cor.id
          }}); 
      }) 
      res.json(cheapMealArr)
  }

  module.exports = cheapMeals; 