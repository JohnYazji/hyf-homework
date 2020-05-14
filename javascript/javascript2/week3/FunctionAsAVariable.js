// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const stFunction = () =>
console.log("The 1st function in the array");

const sndFunction = () =>
console.log("The 2nd function in the array");

const lastFunction = () =>
console.log("The 3rd function in the array");
const itemArray = [stFunction, sndFunction, lastFunction];
itemArray.forEach(item => item());

// Create a function as a const and try creating a function normally. Call both functions.

const func = () => console.log("a function as a const");

function func2() {
console.log("A normal function");}

func();
func2();

// Create an object that has a key whose value is a function. Try calling this function.

const funcName = () => console.log("The function is a value in the object");
const object = {
name: funcName
};

object.name();
