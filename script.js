"use strict";
/////////////////////////////
// Element Selectors
const number = document.querySelector(".number");
const body = document.querySelector("body");
const scoreEl = document.querySelector(".score");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

/////////////////////////////
// Functions

// Instructive Message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Game
const game = function () {
  const guess = Number(document.querySelector(".guess").value);

  // if no input
  if (!guess) {
    displayMessage("Try a Number");

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    body.style.backgroundColor = " #60b347";
    number.style.width = "30rem";
    number.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage("You lost.");
      scoreEl.textContent = score - 1;
    }
  }
};

// Play Again
const playAgain = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreEl.textContent = score;
  displayMessage("Start guessing...");
  number.textContent = "?";

  number.style.width = "15rem";
  body.style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
};

/////////////////////////////
// Event Listeners

// Play Game
document.querySelector(".check").addEventListener("click", game);
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") game();
});

// Play Again
document.querySelector(".again").addEventListener("click", playAgain);
document.addEventListener("keypress", function (e) {
  if (e.key === "Escape") playAgain();
});
