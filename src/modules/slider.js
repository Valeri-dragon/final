const sliderModule = (
  sliderBoxClass,
  slidesItemClass,
  slidesActiveClass = "slide-active"
) => {
  const sliderBlock = document.querySelector(sliderBoxClass);
  const slides = document.querySelectorAll(slidesItemClass);
  if (sliderBlock && slides.length > 0) {
    let dots = [];
    let timeInterval = 3500;
    let currentSlide = 0;
    let idInterval;

    const slideActiveShowClass = (slidesActiveClass, elems) => {
      if (slidesActiveClass === "slide-active") {
        elems.forEach((item, ind) => {
          if (currentSlide === ind) {
            item.style.transform = `scale(1)`;
            item.style.position = "absolute";
            item.style.left = 0;
            item.style.right = 0;
            item.style.opacity = 1;
            item.style.visibility = "visible";
          } else {
            item.style.opacity = "";
            item.style.visibility = "hidden";
            item.style.transform = `scale(1.5)`;
          }
          if (currentSlide >= elems.length) {
            currentSlide = 0;
          }

          if (currentSlide < 0) {
            currentSlide = elems.length - 1;
          }
        });
      }
    };

    const addDot = (elems, block, activeClassDot) => {
      const ul = document.createElement("ul");
      ul.classList.add("slick-dots");
      elems.forEach((item, index) => {
        const li = document.createElement("li");
        li.classList.add("dot");
        dots.push(ul.appendChild(li));
        if (index == 0) {
          li.classList.add("slick-active");
        }
      });
      block.append(ul);
       };
    const prevSlide = (elems, index, strClass) => {
      elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
      elems[index].classList.add(strClass);
    };
    const autoSlide = () => {
      prevSlide(slides, currentSlide, slidesActiveClass);
      prevSlide(dots, currentSlide, "slick-active");
      currentSlide++;

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      nextSlide(slides, currentSlide, slidesActiveClass);
      nextSlide(dots, currentSlide, "slick-active");
      slideActiveShowClass(slidesActiveClass, slides);
    };
    const startSlide = (timer = 1500) => {
      idInterval = setInterval(autoSlide, timer);
    };
    const stopSlide = () => {
      clearInterval(idInterval);
    };

    sliderBlock.addEventListener("click", (e) => {
      e.preventDefault();
      if (!e.target.matches(".dot")) {
        return;
      }
      prevSlide(slides, currentSlide, slidesActiveClass);
      prevSlide(dots, currentSlide, "slick-active");

      if (e.target.classList.contains("dot")) {
        dots.forEach((dot, index) => {
          if (e.target === dot) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      nextSlide(slides, currentSlide, slidesActiveClass);
      nextSlide(dots, currentSlide, "slick-active");
      slideActiveShowClass(slidesActiveClass, slides);
    });

    sliderBlock.addEventListener(
      "mouseenter",
      (e) => {
        if (e.target.matches(".dot")) {
          stopSlide();
        }
      },
      true
    );

    sliderBlock.addEventListener(
      "mouseleave",
      (e) => {
        if (e.target.matches(".dot")) {
          startSlide(timeInterval);
        }
      },
      true
    );

    addDot(slides, sliderBlock);
     startSlide(timeInterval);
  } else {
    return;
  }
};
export default sliderModule;
