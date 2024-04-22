const togglesEl = document.querySelectorAll(".toggle");
const goodEl = document.querySelector("#good");
const cheapEl = document.querySelector("#cheap");
const fastEl = document.querySelector("#fast");

togglesEl.forEach((toggleEl) =>
  toggleEl.addEventListener("change", (e) => {
    doTheTrick(e.target);
  })
);

function doTheTrick(theClickedToggle) {
  if (goodEl.checked && cheapEl.checked && fastEl.checked) {
    if (goodEl === theClickedToggle) {
      fastEl.checked = false;
    }
    if (cheapEl === theClickedToggle) {
      goodEl.checked = false;
    }
    if (fastEl === theClickedToggle) {
      cheapEl.checked = false;
    }
  }
}
