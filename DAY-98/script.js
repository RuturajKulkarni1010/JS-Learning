const userInputEl = document.querySelector("#date");
const buttonEl = document.querySelector(".calculate-button");
userInputEl.max = new Date().toISOString().split("T")[0];
const resultEl = document.querySelector(".result");

function calculateAge() {
  let birthDate = new Date(userInputEl.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let todayDate = new Date();

  let d2 = todayDate.getDate();
  let m2 = todayDate.getMonth() + 1;
  let y2 = todayDate.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  console.log(y3, m3, d3);

  resultEl.innerHTML = `You are <strong>${y3}</strong> years, <strong>${m3}</strong> months, <strong>${d3}</strong> days old.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

buttonEl.addEventListener("click", () => {
  calculateAge();
});
