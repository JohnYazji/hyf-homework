const express = require("express");
const app = express();

const meals = require("./routes/meals.js");
const reviews = require("./routes/reviews.js");
const reservations = require("./routes/reservations.js");

app.use((request, query, next) => {
  console.log(`${new Date()} request received for path: ${request.url}`);

  next();
});

app.get("/meals", meals);
app.get("/reviews", reviews);
app.get("/reservations", reservations);

app.listen(3000);
