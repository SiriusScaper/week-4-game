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
for(i = btnNum.length; i < 4; i++ ){
    minNum = randomNumRange(1, 12)
    btnNum.push(minNum)
}
//I am probably missing a much simpler way to do this.


// if (btnNum.length !== 4){
//     btnNum.push(minNum);
//     console.log(btnNum);
// }

console.log(btnNum);

//Function to add main random number to dom
$('#whatever').html(maxNum);

//Need a function to add score number to dom

//Add click functionality to "buttons"
    //should add a random number from array
    //should add to the score counter by the amount of the number added
$('#red, #blue, #green, #violet').on('click', function(){
    // $('.randNum').html(minNum);
    $('#red').html(minNum);
    $('#blue').html(minNum);
    $('#green').html(minNum);
    $('#violet').html(minNum);
})

//Need a function to compare maxNum to current score value
    //If score is less than maxNum then continue
    //else if score is equal to maxNum
        //Update win +1
        //Reset minNum/maxNum values
    //else update loss +1
        //reset minNum/maxNum values

//Need a reset function to set everything back to default
    //Gen new random numbers
    //Reset win/loss

console.log("poop " + minNum + ' ' + maxNum);

// function genRanNumButtons() {
//     while (buttonNumbers.length < 4){
//         buttonNumbers.push(storeNum);
//     }
// }

// console.log(buttonNumbers)