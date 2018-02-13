console.log('Hello World')

//Global variables

let buttonNumbers = [];
let minNum = randomNumRange(1, 12);
let maxNum = randomNumRange(19, 120);
let wins
let losses


//Generate a random number using arguements to get specific ranges for the elements of the game
function randomNumRange(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

//Function to add main random number to dom
function addToHTML(){
    $('#whatever').html(maxNum.attr('value'));
}


console.log("poop " + minNum + ' ' + maxNum);

// function genRanNumButtons() {
//     while (buttonNumbers.length < 4){
//         buttonNumbers.push(storeNum);
//     }
// }

// console.log(buttonNumbers)