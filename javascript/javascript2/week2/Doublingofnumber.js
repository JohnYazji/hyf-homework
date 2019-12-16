
let numbers = [1, 2, 3, 4];
let newNumbers = [];

// create new array with just odd numbers
const oddNumbers = numbers.filter ((number) => {
if (number % 2 !== 0) return true
})  

// create new array with just double odd numbers
const dobbleOddNumbers = item => item * 2

const dobbleOddNumber = oddNumbers.map(dobbleOddNumbers)
console.log(dobbleOddNumber);