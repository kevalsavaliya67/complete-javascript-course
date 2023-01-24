'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.querySelector('#current--0');
const surrentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions ..
score0El.textContent = 99;
score1El.textContent = 0;
diceEl.classList.add('hidden');
var currentScore = 0;
var currentPlayer = 0;
var finalScore = [0, 0];

// change player
function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--active');

  currentPlayer = 1 - currentPlayer;

  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add('player--active');
}

//roll btn click event
btRoll.addEventListener('click', function () {
  //genrate random number in b/w 1 to 6
  var t = Math.trunc(Math.random() * 6) + 1;

  // change dice image
  diceEl.classList.remove('hidden');
  let imgD = 'dice-' + t + '.png';
  diceEl.src = imgD;

  //if dice have 1 than chnage player
  if (t !== 1) {
    currentScore = currentScore + t;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else if (t == 1) {
    switchPlayer();
  }
});

// hold btn functionality .....
btnHold.addEventListener('click', function () {
  var displayScr = Number(
    document.querySelector(`#score--${currentPlayer}`).textContent
  );
  displayScr += currentScore;
  if (displayScr >= 100) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--winner');
  }
  document.querySelector(`#score--${currentPlayer}`).textContent = displayScr;
  switchPlayer();
});

function newbt() {
  if (currentPlayer == 1) switchPlayer();
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  currentPlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  currentScore = 0;
  currentPlayer = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
}
//new btn implemation ...
btnNew.addEventListener('click', newbt);
