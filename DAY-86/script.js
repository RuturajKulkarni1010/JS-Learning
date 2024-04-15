const canvasEl = document.querySelector("#canvas");
const ctx = canvasEl.getContext("2d");
const decreaseEl = document.querySelector(".decrease");
const increaseEl = document.querySelector(".increase");
const sizeEl = document.querySelector(".size");
const colorEl = document.querySelector(".color");
const clearEl = document.querySelector(".clear");
console.log(decreaseEl);
console.log(canvasEl);
let size = 20;
let color = "black";
let x;
let y;
let isPressed;

decreaseEl.addEventListener("click", () => {
  if (size > 0) {
    size--;
  }
  displaySize();
});
increaseEl.addEventListener("click", () => {
  size++;
  displaySize();
});

clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvasEl.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvasEl.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvasEl.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    changeColor();
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function changeColor() {
  color = colorEl.value;
}

function displaySize() {
  sizeEl.textContent = size;
}
