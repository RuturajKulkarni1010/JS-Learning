const sliderContainerEl = document.querySelector(".slider-container");
const leftSliderEl = document.querySelector(".left-sidebar");
const rightSliderEl = document.querySelector(".right-sidebar");
const upButtonEl = document.querySelector(".up-button");
const downButtonEl = document.querySelector(".down-button");
const slidesLength = rightSliderEl.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSliderEl.style.top = `-${(slidesLength - 1) * 100}vh`;

upButtonEl.addEventListener("click", () => {
  changeSlide("up");
});
downButtonEl.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainerEl.clientHeight;

  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  }

  if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  rightSliderEl.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  console.log(activeSlideIndex * sliderHeight);
  console.log(leftSliderEl);
  leftSliderEl.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
