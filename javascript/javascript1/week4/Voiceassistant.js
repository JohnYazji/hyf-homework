//Methods used in this exercise pop, push, splice, slice shift. includes, toLowCase,split, startsWith, endsWith, getDate, Number, alert, join, new Date

let myName;
let todo = [];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const listOfFavorDish = [];
const listOfMyFavorDish = [];
const theEvent = [1,2,3];

getReply('hello my name is Benjamin');
getReply('hello my name is Benjamin');
getReply('What is my name');
getReply('Add fishing to my todo');
getReply('Add singing in the shower to my todo');
getReply('Remove fishing from my todo');
getReply('What is on my todo?');
getReply('What day is it today?');
getReply('what is 3 + 3');
getReply('what is 4 * 12');
getReply('My favorite dish is lasagne');
getReply('What is my favorite dish Tabbouleh');
getReply('Set a timer for 4 minutes');
getReply('Add Bike ride the 28/11/2019 to my calendar');
getReply('Add movie the 30/11/2019 to my calendar');
getReply('What am I doing this week?');


function getReply(command) {

    let lowerString = command.toLowerCase();
    let splittedString = command.split(' ');


//The first and the second request
    if (lowerString.includes("hello") && myName === undefined) {
        myName = splittedString.pop();
        console.log(`Nice to meet you ${myName}`);
    }

    else if (lowerString.includes("hello") && myName) {
        console.log(`Nice to meet you again ${myName}`);
    }

    else if (lowerString.includes("what is my name") && myName === undefined) {
        console.log(`Please mention your name first`);
    }

    else if (lowerString.includes("what is my name")) {
        console.log(`Your name is ${myName}`);
    }

//Add/remove to todos
    else if (lowerString.includes("fishing to")) {
        let addFishing= splittedString.slice(1, 2);
        todo.push(addFishing);
        console.log(`${addFishing} added to a list of todo`);
    }
    
    else if (lowerString.includes("singing")) {
        let addSinging = splittedString.slice(1, 5).join(' ');
        todo.push(addSinging);
        console.log(`${addSinging} added to a list of todo`);
    }

    else if (lowerString.startsWith("remove") && lowerString.endsWith("from my todo")) {
        let removeFishing = todo.shift();
        console.log(`Removed ${removeFishing} from your todo`);
        console.log(todo);
    }
//What is on my todo?
    else if (lowerString.includes("what is on my todo?")) {
        console.log(`you have ${todo.length} todos - ${todo}`);
    }

//what day is today?
    else if (lowerString.includes("what day is it today")) {
        let today = new Date();
        let date = today.getDate();
        let month = months[today.getMonth()];
        let year = today.getFullYear();
        console.log(today);
        console.log(`Today is ${date} of ${month} ${year}`);
    }

//what is 3 + 3 and 4 * 12
    else if (lowerString.includes('+') || lowerString.includes('*')) {

        let plus = splittedString.slice(2, 3);
        let multiple = splittedString.slice(4);

        if (lowerString.includes('+')) {
            let all = Number(plus) + Number(multiple);
            console.log(`Sum of ${plus} and ${multiple} is ${all}`);
        }
        else if (lowerString.includes('*')) {
            let all = Number(plus) * Number(multiple);
            console.log(`${plus} multiple ${multiple} is ${all}`);
        }
    }
    //My favorite dish is lasagne
    else if (lowerString.includes("my favorite dish is")) {
        let FavorDish = splittedString.pop();
        listOfFavorDish.push(FavorDish);
        console.log(`${FavorDish} is your favorite dish`);
    }
    //What is my favorite dish
    else if (lowerString.includes("what is my favorite dish")) {
        let FavorDishTab = splittedString.pop();
        listOfMyFavorDish.push(FavorDishTab);
        console.log(`My favorite dish is ${listOfMyFavorDish}`);
    }

    //Set a timer for 4 minutes
    else if (lowerString.includes("set a timer for 4 minutes")) {
        let num = splittedString.slice(4, 5);
        let digitNum = Number(num);
        console.log(`Timer set for ${digitNum} minutes`);
        setTimeout(() => alert("Timer done"), digitNum * 60 * 1000);
    }

    //Add Bike ride the 3/5/2019 to my calendar
    else if (lowerString.includes("calendar")) {
        let calenderBike = splittedString.slice(1, -5).join(' ');
        console.log(`${calenderBike} added to your calendar`);
    }
    //What am I doing this week?
    else if (lowerString.startsWith("what") && lowerString.endsWith("this week?")) {
        console.log(`This week you have ${theEvent.length} the Event:`)

        for (let i = 0; i < theEvent.length; i++) {
        }

    }

    else {
        console.log("Please give a valid command");
    }

}
