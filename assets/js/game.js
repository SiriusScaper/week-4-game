// Generate a random number using arguements to get specific ranges for the elements of the game
const randomNumRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Global variables

let minNum = randomNumRange(1, 12);
let maxNum = randomNumRange(19, 120);
let wins = 0;
let losses = 0;
let score = 0;
let btnNum = [];

// Update array with four random numbers to use on the "buttons"
const numArrUpdate = () => {
  for (let i = btnNum.length; i < 4; i++) {
    minNum = randomNumRange(1, 12);
    btnNum.push(minNum);
  }
};
numArrUpdate();

// reset minNum/maxNum values

const reset = () => {
  btnNum = [];
  numArrUpdate();
  maxNum = randomNumRange(19, 120);
  score = 0;
};


// Need a function to compare maxNum to current score value
const compare = () => {
  if (maxNum < score) {
    losses += 1;
    reset();
    console.log(losses)
  } else if (score === maxNum) {
    wins += 1;
    reset();
    console.log(wins)
  }
};


console.log(btnNum);

// Function to add main random number to dom


// Add click functionality to "buttons"
// should add a random number from array
// should add to the score counter by the amount of the number added

$('#red').on('click', () => {
  score += btnNum[0];
  compare();
  console.log(score);
});

$('#blue').on('click', () => {
  score += btnNum[1];
  compare();
  console.log(score);
});

$('#green').on('click', () => {
  score += btnNum[2];
  compare();
  console.log(score);
});

$('#violet').on('click', () => {
  score += btnNum[3];
  compare();
  console.log(score);
});

// Need a function to add score number to dom
$('#bigrandom').html(maxNum);

$('#red, #blue, #green, #violet').click(() => {
  $('#score').html(score);
  $('#wins').html(wins);
  $('#losses').html(losses)
  $('#bigrandom').html(maxNum);
});

// const check = (compare) => {
//   if (score < maxNum) {
//     console.log(score)
//   } else if (score === maxNum) {
//     wins += 1;
//     reset();
//   } else {
//     losses += 1;
//     reset();
//   }
// }
// check();
// If score is less than maxNum then continue
// else if score is equal to maxNum
// Update win +1
// Reset minNum/maxNum values
// else update loss +1
// Need a reset function to set everything back to default
// Gen new random numbers

console.log(`poop ${minNum} ${maxNum} ${wins} ${losses}`);
