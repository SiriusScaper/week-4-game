// Generate a random number using arguements to get specific ranges for the elements of the game
const randomNumRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Global variables

let minNum = randomNumRange(1, 12);
let maxNum = randomNumRange(19, 120);
let wins = 0;
let losses = 0;
let score = 0;
const btnNum = [];

// reset minNum/maxNum values

const reset = () => {
  maxNum = randomNumRange(19, 120);
  minNum = randomNumRange(1, 12);
};

// Update array with four random numbers to use on the "buttons"
const numArrUpdate = () => {
  for (let i = btnNum.length; i < 4; i++) {
    minNum = randomNumRange(1, 12);
    btnNum.push(minNum);
  }
};

numArrUpdate();

// Need a function to compare maxNum to current score value
const compare = () => {
  if (score > maxNum) {
    losses += 1;
    reset();
  } else if (score === maxNum) {
    wins += 1;
    reset();
  }
};

// if (btnNum.length !== 4){
//     btnNum.push(minNum);
//     console.log(btnNum);
// }

console.log(btnNum);

// Function to add main random number to dom
$('#bigrandom').html(maxNum);

// Need a function to add score number to dom
$('#score').html(score);

// Add click functionality to "buttons"
// should add a random number from array
// should add to the score counter by the amount of the number added

// $('#red, #blue, #green, #violet').on('click', function(){
//     $('#red').html(btnNum[0]);
//     $('#blue').html(btnNum[1]);
//     $('#green').html(btnNum[2]);
//     $('#violet').html(btnNum[3]);
// });

$('#red').on('click', () => {
  score += btnNum[0];
  console.log(score);
  compare();
});

$('#blue').on('click', () => {
  score += btnNum[1];
  console.log(score);
  compare();
});

$('#green').on('click', () => {
  score += btnNum[2];
  console.log(score);
  compare();
});

$('#violet').on('click', () => {
  score += btnNum[3];
  console.log(score);
  compare();
});


console.log(green);


// If score is less than maxNum then continue
// else if score is equal to maxNum
// Update win +1
// Reset minNum/maxNum values
// else update loss +1
// Need a reset function to set everything back to default
// Gen new random numbers

console.log(`poop ${minNum} ${maxNum}`);

// function genRanNumButtons() {
//     while (buttonNumbers.length < 4){
//         buttonNumbers.push(storeNum);
//     }
// }

// console.log(buttonNumbers)
