const API_URL = "https://api.github.com/users/";

const formEl = document.querySelector("#form");
const searchEl = document.querySelector("#search");
const main = document.querySelector(".main");

async function getUser(username) {
  const result = await fetch(API_URL + username);
  const data = await result.json();
  console.log(data.name);
  if (data.name === null) {
    createErrorCard("No profile with this username.");
  } else {
    makeUserCard(data);
  }
  //   } catch (err) {
  //     console.log(err);
  //     if (err.response.status == 404) {
  //       createErrorCard("No profile with this username.");
  //     }
  //   }
}

function makeUserCard(data) {
  console.log(data.name);
  console.log();
  const cardHTML = `
    <div class="card">
        <div>
          <img
            src="${data.avatar_url}"
            alt="user-profile"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h1 class="user-name">${data.name}</h1>
          <p class="description">
            ${data.bio}
          </p>

          <ul class="details-list">
            <li class="details-items">
              <span class="circle">${data.followers}</span> <strong>Followers</strong>
            </li>
            <li class="details-items">
              <span class="circle">${data.following}</span> <strong>Following</strong>
            </li>
            <li class="details-items">
              <span class="circle">${data.public_repos}</span> <strong>Repos</strong>
            </li>
          </ul>
        </div>
      </div>
    `;
  console.log(cardHTML);
  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
        <h1 class="user-name">${msg}</h1>
    `;
  main.innerHTML = cardHTML;
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = searchEl.value;
  if (user) {
    getUser(user);
    searchEl.value = "";
  }
});
