/*----------------Boiler Plate-------------*/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
/*---------------Global------------*/
let min = 1
let max = 100

/*------------Function Block----------*/

function randoNumb(min,max) {
  let range = max - min + 1
  return min + Math.floor(Math.random() * range)
}
// makes the guess efficient by halving the range
function smartGuess(min, max){
  return Math.floor((min + max) /2)
}

//starts the games
start();
//async func computer guesses
async function start() {
  //starting prompt
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  //assigns number to variable
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  //function to generate number to variable
  let compGuess = smartGuess(min,max)
  let answer = await ask('Is your number ' + compGuess + "?")
  if(answer === "y") {
    console.log("Whoo hoo! Skynet wins again!!")
    process.exit()
  } else {
    while(answer !== "y") {
      let hiLow = await ask("Is it higher or lower? (h/l)")
      if(hiLow === "h"){
        min = compGuess + 1
        compGuess = smartGuess(min, max)
      } else if (hiLow === "l"){
        max = compGuess - 1
        compGuess = smartGuess(min, max)
      }
      answer = await ask("Is your number " + compGuess + "? ")
    }
  }




  // Now try and complete the program.
  process.exit();
}
