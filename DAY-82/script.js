const circularNavbarEl = document.querySelector(".circular-navbar");
const navBarEl = document.querySelector(".nav-bar");
const pageEl = document.querySelector(".page");

circularNavbarEl.addEventListener("click", () => {
  circularNavbarEl.classList.toggle("circular-navbar-rotate");
  pageEl.classList.toggle("page-rotate");
  navBarEl.classList.toggle("nav-bar-none");
});
