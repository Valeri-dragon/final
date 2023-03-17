const accordeon = (accordeonBlock, activeClassAccordeon) => {
  const block = document.querySelector(`.${accordeonBlock}`);
  const blockItem = block.querySelectorAll(".element");

  block.addEventListener("click", (e) => {
    blockItem.forEach((item) => {
      item.classList.contains(activeClassAccordeon) &&
        item.classList.remove(activeClassAccordeon);
    });
    e.target.closest(".title") &&
      !e.target.classList.contains(activeClassAccordeon) &&
      e.target.parentNode.classList.add(activeClassAccordeon);
  });
};
export default accordeon;
