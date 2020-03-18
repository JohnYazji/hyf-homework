const express = require("express");
const app = express();

// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first   second).

app.get("/numbers/add", (req, res) => {
const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  const sum = firstNumber  + secondNumber;

  res.send(`The total of ${firstNumber} and ${secondNumber} is : ${sum}`);
});
// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
app.get("/numbers/multiply", (req, res) => {
  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  const multiple = firstNumber * secondNumber;

  res.send(
    `Multiplication of ${firstNumber} and ${secondNumber} is : ${multiple}`
  );
});

app.listen(3000);