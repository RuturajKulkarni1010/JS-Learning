const displayTimeEl = document.querySelector("#display-time");
const startButtonEl = document.querySelector(".start-image");
const stopButtonEl = document.querySelector(".stop-image");
const resetButtonEl = document.querySelector(".reset-image");

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  displayTimeEl.innerHTML = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }

  timer = setInterval(stopwatch, 1000);
}

startButtonEl.addEventListener("click", () => {
  watchStart();
});

stopButtonEl.addEventListener("click", () => {
  clearInterval(timer);
});

resetButtonEl.addEventListener("click", () => {
  [seconds, minutes, hours] = [0, 0, 0];
  clearInterval(timer);
  displayTimeEl.innerHTML = `00:00:00`;
});
