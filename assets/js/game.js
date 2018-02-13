console.log('Hello World')

//Global variables

let minNum = randomNumRange(1, 12);
let maxNum = randomNumRange(19, 120);
let wins = 0
let losses = 0
let score = 0
let btnNum = []


//Generate a random number using arguements to get specific ranges for the elements of the game
function randomNumRange(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

//Update array with four random numbers to use on the "buttons"
if (btnNum.length !== 4){
    btnNum.push(minNum);
    console.log(btnNum);
}
console.log(btnNum);

//Function to add main random number to dom
$('#whatever').html(maxNum);

//Add click functionality to "buttons"
$('#red, #blue, #green, #violet').on('click', function(){
    // $('.randNum').html(minNum);
    $('#red').html(minNum);
    $('#blue').html(minNum);
    $('#green').html(minNum);
    $('#violet').html(minNum);
})


console.log("poop " + minNum + ' ' + maxNum);

// function genRanNumButtons() {
//     while (buttonNumbers.length < 4){
//         buttonNumbers.push(storeNum);
//     }
// }

// console.log(buttonNumbers)