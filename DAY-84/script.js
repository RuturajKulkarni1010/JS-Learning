const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ded40152f5dddc25a58839437a312851&page=1`;
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=ded40152f5dddc25a58839437a312851&query="`;

const formEl = document.querySelector("#form");
const searchEl = document.querySelector("#search");
const mainEl = document.querySelector(".main");

// Get Initial Movies.
getMovies(API_URL);

// Function to call the API.
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  mainEl.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");

    movieEl.classList.add("movie");

    movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}" />
    <div class="movie-info">
      <h3 class="movie-title">${title}</h3>
      <span class="${getClassByRate(vote_average)}">${roundTheNumber(
      vote_average
    )}</span>
    </div>
    <div class="overview">
      <h3 class="overview-title">Overview Title</h3>
      ${overview}
    </div>
    `;

    mainEl.appendChild(movieEl);
  });
}

function roundTheNumber(vote) {
  vote *= 100;
  vote = Math.round(vote);
  vote /= 100;
  return vote;
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchEl.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    searchEl.value = "";
  } else {
    window.location.reload();
  }
});
