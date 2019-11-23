const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

let timeToArrive = travelInformation.destinationDistance / travelInformation.speed; //The calculation of time to arrive. Gives 8.64 Distance divided by speed.
console.log(timeToArrive); // time to arraive 

timeInHours = Math.floor(timeToArrive);
console.log(timeInHours)

//To convert the number (64) after (8) to minutes.

const convertToMinutes = {
    minInHour: 60,
    percentage: 100,
    number: 64
  };
  
let numberInMin = convertToMinutes.minInHour / convertToMinutes.percentage * convertToMinutes.number;

console.log(numberInMin);

//let timeInHours = Math.floor(timeTaken); console.log(timeInHours);

timeInMinutes = Math.floor(numberInMin);
console.log(timeInMinutes)

console.log("The time that will take to arrive at your destination is " + timeInHours + " hours and " + timeInMinutes + " minutes.");