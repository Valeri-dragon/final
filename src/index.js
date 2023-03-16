import sliderModule from "./modules/slider";
import addDotSlider from "./modules/addDotSlider";
import mobileMenu from "./modules/mobileMenu";
import arrowUp from "./modules/arrowUp";
import scrollSmooth from "./modules/scrollSmooth";
import modal from "./modules/modal";
arrowUp();

addDotSlider("top-slider", "item", "slick-dots", "slick-active");
sliderModule("top-slider", "item", "active", "slick-active");
//sliderModule("services-carousel", "col-sm-6");

mobileMenu();
scrollSmooth();
modal();

