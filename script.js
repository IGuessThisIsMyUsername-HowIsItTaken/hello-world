'use strict';

let score = 100;
let secretNumber = Math.trunc(Math.random() * score) + 1;
let highScore = 0;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
}

let reset = function () {
  let guess = document.querySelector('.guess');
  score = 20;
  guess.value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  displayMsg(`Start guessing...`);
  document.querySelector('.number').style.width = '15rem';
  
  document.querySelector('.possible-win').textContent = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
}

document.querySelector('.check').addEventListener('click', function() {
  let guess = Number(document.querySelector('.guess').value);

  let hex = [
    '#B03A2E',
    '#839192',
    '#2E86C1',
    '#808B96 ',
    '#7B7D7D',
    '#884EA0',
    '#85C1E9',
    '#28B463',
    '#5499C7',
    '#5499C7',
    '#5499C7',
    '#D7BDE2',
    '#F9E79F'
  ];
  let random;
  for (let i = 0; i < hex.length; i++) {
    random = Math.trunc(Math.random() * hex.length);
    random = hex[random];
  }
  document.querySelector('body').style.backgroundColor = random;
  // Handle no input
  if (!guess) {
    displayMsg(`Please enter a number...`);
  }

  //Player guesses correctly
  else if (guess === secretNumber) {
    document.querySelector('.possible-win').textContent = 'Nice!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;
    displayMsg(`Correct!!: ${guess}`);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    setTimeout(() => {
      reset();
    }, 3000);
  }
  
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? 'Too high!!' : 'Too low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('You lost!!');
      document.querySelector('.score').textContent = 0;
      setTimeout(() => {
        reset();
      }, 3000);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  let guess = document.querySelector('.guess');
  score = score;
  guess.value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  displayMsg(`Start guessing...`);
  document.querySelector('.number').style.width = '15rem';
  
  document.querySelector('.possible-win').textContent = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});
