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


start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  let compGuess = randoNumb(min,max)
  let answer = await ask('Is your number ' + compGuess + "?")
  if(answer === "y") {
    console.log("Whoo hoo! Skynet wins again!!")
    process.exit()
  } else {
    while(answer !== "y") {
      let hiLow = await ask("Is it higher or lower? ")
      console.log(hiLow)
    }
  }




  // Now try and complete the program.
  //process.exit();
}
