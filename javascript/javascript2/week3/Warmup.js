// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

// 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

function delayLogOut(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}

delayLogOut(1.5, "This string logged after 1.5 seconds");

//3. Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

function buttonClick() {
  delayLogOut(5, "Called after 5 seconds");
}
let button1 = document.getElementById("btn1");
button1.addEventListener("click", buttonClick);

//4. Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now...

const logsOutEarth = () => {
  console.log("This is Earth planet!");
};

const logsOutSaturn = () => {
  console.log("This is Saturn planet!");
};

function LogOutFunction(func) {
  func();
}
LogOutFunction(logsOutEarth);
LogOutFunction(logsOutSaturn);

// 5. Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api.

function getPosition() {
  navigator.geolocation.getCurrentPosition(position => {
console.log(`This is the latitude{position.coords.latitude.toFixed(2)}`);
console.log(`This is the latitu{position.coords.longitude.toFixed(2)}`);
});
}
let button2 = document.getElementById("btn2");
button2.addEventListener("click", getPosition);

// 6.Optional Now show that location on a map using fx the Google maps api
/* var map;
function initMap() {
map = new google.maps.Map(document.getElementBy("map"), {
center: { lat: -34.397, lng: 150.644 },
zoom: 8
});
} */ 
//I have copied the code above from the link provided in the homework with the HTML code. but it is not working. plz help me to figure out the issue. 

//7. Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
setTimeout(callback, delay * 1000);}

const callFunction = () =>
console.log(`This function is running after 4 seconds delay!`);

runAfterDelay(4, callFunction);

// 8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!" Meee!!
function dblClick() {
console.log("Duble click");
}
btn1.addEventListener("dblclick", dblClick);

// 9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
if (shouldTellFunnyJoke) {
logFunnyJoke();
} else {logBadJoke();}
}

jokeCreator(true, logFunnyJoke, logBadJoke);
