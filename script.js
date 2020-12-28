'use strict';

//
let number = document.querySelector('.number'); //?
let guess = document.querySelector('.guess'); //input
let checkBtn = document.querySelector('.check');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let againBtn = document.querySelector('.again');
let displayMessage = function (messageForUser) {
  message.textContent = messageForUser;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
let gameHighScore = 0;

//
checkBtn.addEventListener('click', function () {
  const guessValue = Number(guess.value);
  if (!guessValue) {
    displayMessage('⛔NOT A NUMBER!⛔');
  } else if (guessValue === secretNumber) {
    displayMessage('You are correct🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (gameScore > gameHighScore) {
      gameHighScore = gameScore;
      highScore.textContent = gameHighScore;
    }
  } else if (guessValue !== secretNumber) {
    if (gameScore > 1) {
      displayMessage(
        guessValue > secretNumber
          ? 'You are too high 📈!'
          : 'You are too low📉!'
      );
      gameScore--;
      score.textContent = gameScore;
    } else {
      displayMessage('You lost the game💥');
      score.textContent = 0;
    }
  }
});

//
againBtn.addEventListener('click', function () {
  gameScore = 20;
  guess.value = '';
  message.textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score.textContent = gameScore;
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
});
