var input = null;
let yourguesses = [];
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
var wins = 0, losses = 0, guessLeft = 9;
console.log("computer guess = " + computerGuess);

function isLetter(input) {
  return input.length === 1 && input.match(/[a-z]/i);
}

document.onkeyup = function (event) 
{
  //record user input
  input = (String.fromCharCode(event.keyCode).toLowerCase());

  //check to make sure input is from alphabet list
  for (var i = 0; i < alphabetLetters.length; ++i) 
  {
    if (isLetter(input)) 
    {
      yourguesses.push(input);
      //you win case
      if (input === computerGuess) {
        wins += 1;
        alert("You won!!!");
        guessLeft = 9;
        computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        yourguesses = [];
        console.log("computer guess = " + computerGuess);
      }
      else { //guess wrong case
        guessLeft--;
      }
      //you lose case
      if (guessLeft === 0) {
        alert("GUESS WRONGED\nComputer letter: " + computerGuess);
        guessLeft = 9; losses += 1;
        yourguesses = [];
        computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        console.log("computer guess = " + computerGuess);
      }
      // Display to HTML
      var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + yourguesses + "</h4></p>";

      document.querySelector("#game").innerHTML = html;
    } else alert("Not within [a, z]");
  } 



}