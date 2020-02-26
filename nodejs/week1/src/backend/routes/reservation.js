const express = require ("express");
const router = express();

const reservation = require("../data/reservations.json");

router.get("/reservation",(request,response) => {
    response.json(reservation[Math.floor(Math.random()* reservation.length)]);
})

module.exports = router; 