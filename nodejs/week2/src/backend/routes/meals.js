module.exports = (req, res) =>{

}
const meals = require("../data/meals.json");

const mealsJson = require("../data/meals");

  //Get meals that has a price smaller than maxPrice
  const maxPrice = Number(req.query.maxPrice);
  if (maxPrice > 0) {
    const cheaperThan = mealsJson.filter(cor => {
      if (Number(cor.price) < maxPrice) {
        return cor.price;
      }
    });
    res.send(cheaperThan);
    next();
  }

  const mealTitle = meals.filter(item => {
    const title = request.query.title;
    return title === item.title;
  });

// Get meals that has been created after the date
const createdAfter = parseISO(req.query.createdAfter);
if (createdAfter > 0) {
  const createdAfter = mealsJson.filter(cor => {
    return parseISO(cor.createdAt) > createdAfter;
  });
  res.send(createdAfter);
  next();
};

  const mealsLimited = meals.slice(item => {
   const limit = parseInt(request.query.limit);
    return meals.indexOf(item) < limit;
  });

  
