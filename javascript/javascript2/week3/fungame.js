let inputBtn = document.getElementById("input");
let button1 = document.getElementById("button");
let button2 = document.getElementById("button2");
let leftBtn = document.querySelector(".sSide label");
let rightBtn = document.querySelector(".lSide label");
let winnerMessageL = document.querySelector(".sSide label:last-child");
let winnerMessageR = document.querySelector(".lSide label:last-child");

let countS = 0;
let countL = 0;

// Will be executed when I press "Start game"
function getInputValue() {
  let time = inputBtn.value;
  if (time < 3) {
    alert(`Please provide time more than 2 second`);
  } else {
    
    countS = 0;
    countL = 0;
    leftBtn.innerHTML = countS;
    rightBtn.innerHTML = countL;
    document.addEventListener("keydown", left);

  setTimeout(() => {
    
      inputBtn.disabled = false;
      button1.disabled = false;
      document.removeEventListener("keydown", left); 

      if (leftBtn.innerHTML == 0 && rightBtn.innerHTML == 0) {
        alert(`Please set the time in the field.`);
      } else {
        console.log(leftBtn.innerHTML);
        console.log(rightBtn.innerHTML);
        if (leftBtn.innerHTML > rightBtn.innerHTML) {
        winnerMessageL.innerHTML = `Yesss! You're the wonnnr!`;
        winnerMessageR.innerHTML = `Unfortunately! You lost`;
        
        } else if (leftBtn.innerHTML < rightBtn.innerHTML) {
        winnerMessageR.innerHTML = `Congrats,You won!`;
        winnerMessageL.innerHTML = `Sorry,You lost!`;
          
        } else {
        winnerMessageL.innerHTML = `Draw Game!`;
        winnerMessageR.innerHTML = `Draw Game!`;
        }
      }
    }, time * 1000);
  }
}

button1.addEventListener("click", getInputValue);

function left(event) {
  if (event.code == "KeyS") {
  countS++;
  } else if (event.code == "KeyL") {
  countL++;
  }
  leftBtn.innerHTML = countS;
  rightBtn.innerHTML = countL;
}

function Begin() {
document.location.href = "";
}

button2.addEventListener("click", Begin);
