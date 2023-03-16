import sliderModule from "./slider";
const addDotSlider = (
  sliderBoxClass,
  slidesItemClass,
  boxDots,
  activeClassDot
) => {
  const sliderBlock = document.querySelector(`.${sliderBoxClass}`);
  const slides = document.querySelectorAll(`.${slidesItemClass}`);

  
  //const activeClassDot = document.querySelectorAll(`.${activeClassDot}`);
  if (sliderBlock && slides.length > 0) {
   
    let dots = [];
     

 
    const ul = document.createElement("ul");
    ul.classList.add(boxDots);
    slides.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("dot");
      dots.push(ul.appendChild(li));
      if (index == 0) {
        li.classList.add(activeClassDot);
      }
    });
    sliderBlock.append(ul);
  


  } else {
    return;
  }
};
export default addDotSlider