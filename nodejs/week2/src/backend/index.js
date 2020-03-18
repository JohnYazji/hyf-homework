const express = require("express");
const app = express();

const mealsJson = require('./data/meals.json');
const reservationsJson = require('./data/reservations.json');   
const reviewJson = require('./data/reviews.json');  


// Respond with the json for the meal with the corresponding id 
app.get("/meals/:id", (req, res) => {
  const mealId = Number(req.params.id);
  const filteredMeal = mealsJson.filter((cor) => {
      return cor.id === mealId
  });
  res.send(filteredMeal) 
});

//Respond with the json for the reservation with the corresponding id	
app.get("/reservations/:id", (req, res) => {    
  const reservationId = Number(req.params.id);
  const filteredReservation = reservationsJson.filter((cor) => {
      return cor.id === reservationId
  });
  res.send(filteredReservation)
});

//Respond with the json for the review with the corresponding id
app.get("/reviews/:id", (req, res) => {    
  const reviewId = Number(req.params.id);
  const filteredReview = reviewJson.filter((cor) => {
      return cor.id === reviewId
  });
  res.send(filteredReview)
});

//Respond with the json for all reviews
const allReviews = require('./routes/reviews.js');
app.get('/reviews', allReviews);

//Get meals that has a price smaller than maxPrice	
app.get("/meals", (req, res) => {

  const maxPrice = req.query.maxPrice;
  const mealsLessThan = mealsJson.filter((cor) => {
          if(Number(cor.price) < maxPrice) {
              return cor.price
          }
      });
      res.send(mealsLessThan)
});
// Get meals that partially match a title. Rød grød med will...
app.get("/meals", (req, res)=>{
  
  const title = req.query.title;

  if(title){
    const mealsTitle = mealsJson.slice(0,limit );
    res.send(title);
    return title
  }
  
});

// Get meals that has been created after the date	

app.get("/meals", (req, res)=> {
  const createdAfter = req.query.createdAfter;
  const mealCreatedAfter = mealsJson.filter(item=> {
    return createdAfter < item.createdAt; 
 };
    res.send(mealCreatedAfter);
  });

  // Only specific number of meals
app.get("/meals", (req, res)=>{
  const limit = req.query.limit;
  const limitMeals = mealsJson.slice(0, limitMeals);
  res.send(limit);
});

app.listen(3001);