const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

router.get("/reservations", (request, response) => {
  const reservationIs = reservations.filter(
    item => item.id == request.query.id
  );

  if (request.url === "/reservations") {
    response.json(reservations);
  } else if (reservationIs.length === 0) {
    response.send("sorry, we are not able to find the reservation you are looking for");
  } else {
    response.send(reservationIs);
  }
});

module.exports = router;
