import sliderModule from "./modules/slider";
import addDotSlider from "./modules/addDotSlider";
import mobileMenu from "./modules/mobileMenu";
import arrowUp from "./modules/arrowUp";
import scrollSmooth from "./modules/scrollSmooth";
import modal from "./modules/modal";
import SliderCarousel from "./modules/sliderCarousel";
import accordeon from "./modules/accordeon";
import sendForm from "./modules/sendForm"
arrowUp();

addDotSlider("top-slider", "item", "slick-dots", "slick-active");
//если отрисовываем dots, тогда в sliderModule обязателньо активынй класс слайда и активный класс dots
sliderModule("top-slider", "item", "active", "slick-active");

mobileMenu();
scrollSmooth();
modal();

const options = {
  main: ".services-elements",
  wrap: ".services-carousel",
  slidesToShow: 3,
  infinity: true,
  next: ".arrow-right",
  prev: ".arrow-left",

  responsive: [
    {
      breakpoint: 1024,
      slideToShow: 3,
    },
    {
      breakpoint: 768,
      slideToShow: 2,
    },
    {
      breakpoint: 576,
      slideToShow: 1,
    },
  ],
};
const carousel = new SliderCarousel(options);
carousel.init();
accordeon("accordeon", "active");
sendForm("form-callback");
