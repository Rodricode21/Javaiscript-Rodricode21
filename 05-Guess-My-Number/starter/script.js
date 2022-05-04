'use strict';
/*const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
console.log(document.querySelector('.message'));*/

/*

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const scoreValue = +document.querySelector('.score').textContent;
  console.log('inside check called');
  if (!guess) {
    document.querySelector('.message').textContent = `No number`;
  } else if (guess === number) {
    document.querySelector(`.message `).textContent = 'Correct number!';
  } else if (guess > number) {
    document.querySelector(`.message `).textContent = 'too high!';
    if (scoreValue > 0) {
      document.querySelector('.score').textContent = scoreValue - 1;
    }
  } else if (guess < number) {
    document.querySelector(`.message `).textContent = 'too low!';
    if (scoreValue > 0) {
      document.querySelector('.score').textContent = scoreValue - 1;
    }
  }
});

let number = Math.trunc(Math.random() * 20) + 1;
console.log(document.querySelector('.message'));
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
  return message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === number) {
    displayMessage('correct number!');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30 rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
    else if (guess !== number) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? 'too high' : 'too low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('mesage').textContent = 'you lost the game';
        document.querySelector('.score').textContent = 0;
      }
    }
  }

  /*else if (guess> number){
    if (score>1){
      document.querySelector('.message').textContent= 'too high';
      score--;

      document.querySelector('.score').textContent= score;
    
    }else{ 
      document.querySelector('.message').textContent='you lost the game!';
      document.querySelector('.score').textContent=0;
    } 
  } else if(guess < number){if (score>1){
    document.querySelector('.message').textContent= 'too low';
    score--;

    document.querySelector('.score').textContent= score;
  
  }else{ 
    document.querySelector('.message').textContent='you lost the game!';
    document.querySelector('.score').textContent=0
  }

});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'star guessing!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});
 */
// one more trial, to improve my skill's

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30 rem';
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('message').textContent = 'you lost the game';
      document.querySelector('score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'star guessing';
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});
