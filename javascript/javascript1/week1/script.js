// free code camp user name: fcc45dcda09-5894-48d8-b51e-1d8c7528a794

// Age-ify (A future age calculator)
const yearOfBirth = 1979;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log("You will be " + age +" years old in " + yearFuture + " . ");

// Goodboy-Oldboy (A dog age calculator

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
const humanYearsOld = dogYear * 7; /* 1 Dog year = 7 Human Years. So I multiple the numbers to get the the human years old */

if (shouldShowResultInDogYears) {
console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture + ".");
} else {console.log("Your dog will be " + humanYearsOld + " dog years old in " + dogYearFuture + ".")};


// Housey pricey (A house price estimator)

let wideInMeters;
let deepInMeters;
let highInMeters;
let gardenSizeInM2;
let theHouseCosts;
let volumeInMeters = wideInMeters * deepInMeters * highInMeters; 

// Peter House 
wideInMeters = 8;
deepInMeters = 10;
highInMeters = 10;
gardenSizeInM2 = 100;
theHouseCosts = 2500000;
volumeInMeters = wideInMeters * deepInMeters * highInMeters;
peterHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;


// Julia House
wideInMeters = 5;
deepInMeters = 11;
highInMeters = 8;
gardenSizeInM2 = 70;
theHouseCosts = 1000000;
volumeInMeters = wideInMeters * deepInMeters * highInMeters;
juliaHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

housePriceDifference = peterHousePrice - juliaHousePrice; //the price difference between Julia and Peter's house

console.log("Peter's House Cost " + peterHousePrice);
console.log("Julia's House Cost " + juliaHousePrice);
console.log("The difference amount between Peter and Julia is " + housePriceDifference + " Peter is paying more than Julia.")

// Ez Namey (Startup name generator) Optional

var firstWords =["Nice", "Achieve","client", "Agenda","Crack", "Active","Bunch", "Easy", "Awesome", "Corporate"];
var secondWords = ["desk", "doctor","embrace", "everybody","fault", "gaze","handle", "magazine","innocent", "humor"];

var startupName = firstWords[Math.floor(Math.random() * 10) + 0] + " " + secondWords[Math.floor(Math.random() * 10) + 0];

console.log("The startup: " + startupName + " contains " + startupName.length + " characters");