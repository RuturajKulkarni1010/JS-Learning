const container = document.getElementById("container");
const colors = [
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#e67e22",
  "#2ecc71",
  "#f7d71e",
  "#a18B9E",
  "#D8B6Af",
  "#F8EaE2",
  "#F68554",
  "#07739E",
  "#4884AD",
  "#AEC70C",
  "#6d9D38",
  "#FFD6BB",
  "#FFEAD6",
  "#8776F5",
  "#B0B0FF",
  "#882E11",
  "#FF8714",
  "#0F6C7A",
  "#FE8EC6",
  "#555A7A",
  "#FDD261",
  "#4C9596",
  "#FC1993",
];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#191825";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
