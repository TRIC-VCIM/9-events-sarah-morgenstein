const form = document.querySelector('form');

const message = document.getElementById('message');
const log = document.getElementById('log');

const solution = Math.floor(Math.random() * 100);

console.log(solution);

function checkAnswer(e) {
  e.preventDefault();
  let guess = document.getElementById('guess').value;
  let result;

  message.innerHTML = '';

  if (guess == solution) {
    result = 'Congratulations you won!';
    message.innerHTML = result;
    return;
  }
  let diff = Math.abs(solution - guess);
  console.log('diff is ' + diff);

  if (diff <= 100 && diff >= 50) {
    result = 'freezing';
  } else if (diff <= 49 && diff >= 20) {
    result = 'chilly';
  } else if (diff <= 19 && diff >= 10) {
    result = 'warm';
  } else if (diff <= 9 && diff >= 5) {
    result = 'hot';
  } else {
    result = 'burning';
  }
  message.innerHTML = 'Try again!';

  log.insertAdjacentHTML('beforeend', `<li>${guess}, ${result}</li>`);
  document.getElementById('guess').value = '';
}

form.addEventListener('submit', checkAnswer);
