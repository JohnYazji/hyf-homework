const danishWords = ['blå','bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];


function findShortestWord(danishWords) {

var shortest = danishWords.reduce((shortestWord, currentWord) => {
return currentWord.length < shortestWord.length ? currentWord : shortestWord;
}, danishWords[0]);
return shortest;
}
console.log(findShortestWord(danishWords));


//Another way to find shortest word in an array

const danishWords2 = ['plante', 'kaffe', 'bog', 'b', 'planetarium'];

function findShortestWord(arr) {

let word = arr[0]

for (i = 0; i < arr.length; i++) {

if (arr[i].length < arr[0].length) 
word = arr[i];
}
console.log(word);
}

findShortestWord(danishWords2);

