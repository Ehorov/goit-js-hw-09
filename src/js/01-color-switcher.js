function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', startHandler);
refs.stopBtn.addEventListener('click', stopHandler);

let intervalId = null;
const IntervalDelay = 1000;

function changeColor() {
  let color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
}

function startHandler() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(changeColor, IntervalDelay);
}

function stopHandler() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}
