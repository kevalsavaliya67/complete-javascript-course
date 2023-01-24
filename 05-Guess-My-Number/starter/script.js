'use strict';

let t = Math.trunc(Math.random() * 20) + 1;

var score = 20;
var highScore = 0;
console.log(t);
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 Empty';
  } else if (guess === t) {
    document.querySelector('.message').textContent = '🥳 correct number .. ';
    document.querySelector('.number').textContent = t;
    highScore = Math.max(highScore, score);

    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundImage =
      "url('https://ca-times.brightspotcdn.com/dims4/default/97494b3/2147483647/strip/true/crop/3677x2451+0+0/resize/1200x800!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5d%2Fd9%2Fc7cc87b721adae088e32cea40d01%2F8b3f73aed3214b658b599057596934bb')";
  }
  // when guess is to low....
  else if (score) {
    document.querySelector('.message').textContent =
      guess < t ? '📉 Too low...' : '📈 Too high ';
    score--;
    document.querySelector('.score').textContent = score;
  }
  // when player wins....

  //when player loses....
  if (score < 1) {
    document.querySelector('.message').textContent = '🫣 you lose the game....';
    document.getElementById('body');
  }

  document.querySelector('.again').addEventListener('click', function () {
    t = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = '🧐 start guessing ...  ';
    document.querySelector('.guess').value = '';
    console.log(t);
  });
});
