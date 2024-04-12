const hourHandEl = document.querySelector(".hour-hand");
const minuteHandEl = document.querySelector(".minute-hand");
const secondHandEl = document.querySelector(".second-hand");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let secondsForClock = 0;

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggleEl.addEventListener("click", (event) => {
  const htmlEl = document.querySelector("html");
  if (htmlEl.classList.contains("dark")) {
    htmlEl.classList.remove("dark");
    event.target.innerHTML = "Dark Mode";
  } else {
    htmlEl.classList.add("dark");
    event.target.innerHTML = "Light Mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  if (secondsForClock == 0) secondsForClock = seconds;
  console.log(secondsForClock);
  const ampm = hours >= 12 ? "PM" : "AM";

  hourHandEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteHandEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondHandEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    secondsForClock,
    0,
    59,
    0,
    360
  )}deg)`;
  secondsForClock++;
  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
