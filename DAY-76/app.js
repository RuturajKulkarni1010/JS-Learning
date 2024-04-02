const scrollButtonEl = document.querySelector(".top-button");
const rootEl = document.documentElement;

document.addEventListener("scroll", showButton);
scrollButtonEl.addEventListener("click", scrollTop);

function showButton() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;

  if (rootEl.scrollTop / scrollTotal > 0.1) {
    scrollButtonEl.classList.remove("hide");
  } else {
    scrollButtonEl.classList.add("hide");
  }
}

function scrollTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onscroll = () => {
  scrollProgress();
  newsletter();
};

function scrollProgress() {
  const currentState =
    document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (currentState / pageHeight) * 100;

  const progressBar = document.querySelector(".progress");

  progressBar.style.visibility = "visible";

  progressBar.style.width = scrollPercentage + "%";
}

// Newsletter

// window.onscroll = () => newsletter();

function newsletter() {
  const currentState =
    document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const newsletterEl = document.querySelector(".newsletter");
  if (currentState === pageHeight) {
    newsletterEl.style.transform = "translateX(0%)";
  } else {
    newsletterEl.style.transform = "translateX(-100%)";
  }
}
