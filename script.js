'use strict';
const max = 15;
const min = 1;
let secret = Math.trunc(Math.random() * (max - min) + min);
let score = 20;
let highscore = 0;
// secret number
document.querySelector(`.guess`).addEventListener(`click`, function () {
  document.querySelector(`.guess`).value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  score--;
  document.querySelector('.score').textContent = score;
  if (score > 0) {
    if (guess > 0 && guess < max) {
      document.querySelector('.message').textContent = 'game started ...';
      if (guess == secret) {
        document.querySelector(`.message`).textContent =
          '👏 well done, you win !';
        document.querySelector('.check').disabled = true;
        document.querySelector('.check').textContent = '㊗️Congratulation';
        document.querySelector('body').style.backgroundColor = 'green';
        highscore = document.querySelector(`.highscore`).textContent;
        
        if (highscore < score) {
          document.querySelector(`.highscore`).textContent = score;
        }  else {
          document.querySelector(`.highscore`).textContent = highscore;
        }
      } else if (guess > secret && guess < max) {
        document.querySelector('.message').textContent =
          'larger than secret number';
      } else if (guess < secret && guess > 0) {
        document.querySelector('.message').textContent =
          'less than secret number';
      }
    } else if (guess <= -1 || guess > max) {
      document.querySelector('.message').textContent = '❌ out of range';
    } else if (!guess) {
      document.querySelector('.message').textContent = '❌ No number';
    }
  } else {
    document.querySelector(`.message`).textContent = '🤯oomm You Lost ! ';
    document.querySelector(`.check`).disabled = false;
    document.querySelector(`.again`).style.backgroundColor = 'green';
    document.querySelector('.check').style.backgroundColor = 'red';
    
}
});


// again functionality
document.querySelector('.again').addEventListener('click',function()
{
    document.querySelector('.message').textContent="start the game";
    score=20;
    secret = Math.trunc(Math.random() * (max - min) + min);
    document.querySelector(`.check`).disabled = false;
    document.querySelector(`.guess`).value = "";
    document.querySelector(`body`).style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.check').style.backgroundColor = 'white';
    document.querySelector('.check').textContent = 'check';
    // document.querySelector('.check').style.backgroundColor = 'red';
});
// Document.querySelector(`.check`).style.disable = 'ture';
