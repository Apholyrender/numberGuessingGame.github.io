// Create a number guessing game to generate a number between the range of 1 and 2. The game should prompt users for their username (saved in cookie).
// Set range as function parameter and prompt the player to predict the generated number between the given range, at a correct guess, the game should award the player a point (also saved in cookie), and move them to stage 2 by increasing the range limit value by 1, e.g range is from 1 and 3 for stage 2 and so on. Connect replit account to github and save your program in github.

// 4 things to do.
// 1. Ask user for their name.
// 2. Welcome the user
// 3. Get a random number from a range
// 4. Ask the user for their guess
// 5. Compare the guess and the random number

const prompt = require("prompt"); //function to get random number

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
//parameters
let stage = 1;
let min = 1;
let max = 2;

//prompt
prompt.start();
console.log("Please put in your username");
prompt.get(['username'], function (err, result) {
  if (err) {
    return onErr(err);
  }

  console.log(`welcome to Guessing game ${result.username}`)

  function guess(stage, min, max) {
    console.log(`Stage: ${stage}`);
    console.log(`Guess a number from 1 to ${max-1}`);
    let question = askFunction(min,max)
    prompt.get(["guess"], function(err,result){
      if(question === Number(result.guess)) {
        console.log("You are correct and will now move to the next stage");

        stage = stage + 1
        max = max + 1
        guess(stage, min, max)
      }

      else{
        console.log("wrong!! \n Try again!!");

        guess(stage, min, max)
      }
    })
  }
  guess(stage, min, max)
 });

//functions

function askFunction (min, max) {
  return getRandomNumber(min, max)
}

function onErr(err) {
  console.log(err);
  return 1;
}


