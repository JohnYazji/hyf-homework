//To create a function that returns the average of the parameters

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function average (housePrices){

    let total=0;   //                                       the total of all numbers in the array
    for (let i = 0; i < housePrices.length; i++) {   
           total = total + housePrices[i];        
       }
       console.log("The total of all numbers is " +total);

   const average =Math.round(total/housePrices.length) ;      //average refers to the sum of a group of values divided by the number of values in the group.
   console.log(`The average is ${average}`);
}
average (housePrices);

// To create a function that returns the median of the parameters
// The median is the middle number in a sorted, ascending or descending, list of numbers and can be more descriptive of that data set than the average.
function median (housePrices){ 

    function sortNumber(b, a) { // this function is to sort numbers in descending order
return a - b;
}
housePrices.sort(sortNumber);
console.log("Numbers in descending order " + housePrices);
//let arrayLength = housePrices.length;

if (housePrices.length % 2 === 1){    // to find the middle number in an array  If the length of number is odd 

const oddNo = (housePrices.length-1)/2 
const median = housePrices[oddNo]     // find the median 
console.log("The median is " + median);
} 
// If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values. 
else {
const x = housePrices.length/2 ; //define the middle number in the array. 
const y = housePrices.length/2 +1 ; //to define the second middle number in the array

const theMedian = Math.round((firstValue+secondValue)/2);
console.log(theMedian);
}
}
median (housePrices)


//Now create a function that calculates the median and the average and returns these two value in an object.
function averageAndMedian (average, median){

let find = {average, median};
return find;
}
//console.log(find);
//averageAndMedian (averageAndMedian);
let show = average(housePrices);

const priceArray = document.getElementById('housepriceArray');
const result = document.getElementById('answer');

let newPriceArray = document.createElement('p');
newPriceArray.innerText= "[" + housePrices + "]";

priceArray.appendChild(newPriceArray);

result.addEventListener("click",function(){ alert(result.innerText="The Average is : "  +  show.Average + " and"  + " The Median is :" + show.Median)});