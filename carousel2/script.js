function Slider() {
  const carouselSliders = document.querySelectorAll(".slide");
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");
  let currentSlide = 0;

  //   const changeSlide = (slides) => {
  //     carouselSliders.forEach(
  //       (slide, index) =>
  //         (slide.style.transform = `translateX(${100 * (index - slides)}%)`)
  //     );
  //   };
  const changeSlide = (slides) => {
    carouselSliders.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - slides)}%)`)
    );
  };
  changeSlide(currentSlide);
  console.log(currentSlide);

  btnNext.addEventListener("click", () => {
    currentSlide++;
    if (carouselSliders.length - 1 < currentSlide) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
  });

  btnPrev.addEventListener("click", () => {
    currentSlide--;
    if (0 >= currentSlide) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
  });
}

Slider();
