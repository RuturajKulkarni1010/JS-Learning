const API_URL = "https://icanhazdadjoke.com";

const jokeEl = document.querySelector("#joke");
const getJokeBtnEl = document.querySelector("#getJoke");

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      accept: "application/json",
    },
  };

  const result = await fetch(API_URL, config);
  const data = await result.json();

  jokeEl.innerHTML = data.joke;
}

getJokeBtnEl.addEventListener("click", () => {
  generateJoke();
});
