"use strict";

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

slider.style.transform = "scale(0.4) translateX(-500px)";
// slider.style.overflow = "visible";
let currSlide = 0;

const goToSlide = (slide) =>
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
goToSlide(0);

const nextSlide = function () {
  if (currSlide === slides.length - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = slides.length - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
};

btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", prevSlide);
