
const spiritAnimalList = [
  "Parrot",
  "Cat",
  "Goldfish",
  "Sheep",
  "Puppy",
  "Alligator",
  "Cat",
  "Turtle",
  "Spider",
  "Sheep",
  "Snake"
];

const paragraph = document.querySelector("p"); 
const inputName = document.getElementById("inputName"); 
const btn = document.querySelector("button"); 

function clkOnce(){
const inputText = inputName.value;

if (inputText !== ""){
const newName =   paragraph.textContent 

     paragraph.textContent = (`${inputText} - ${item} `) ;

} else {
paragraph.textContent = ("Please Write Your Name")
}
}

btn.addEventListener("click", clkOnce);

let item =
  spiritAnimalList[Math.floor(Math.random() * spiritAnimalList.length)]; // create a random item from the array
