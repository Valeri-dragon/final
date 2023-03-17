const modal = () => {
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalContent = document.querySelector(".modal-callback");
  const fixBlock = document.querySelectorAll(".fix-block");
  const modal = [modalOverlay, modalContent];

  let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";

  const disableScroll = () => {
    fixBlock.forEach((item) => (item.style.paddingRight = paddingOffset));
    document.body.style.paddingRight = paddingOffset;
  };

  const enableScroll = () => {
    fixBlock.forEach((item) => (item.style.paddingRight = ""));
    document.body.style.paddingRight = "";
  };

  const openModal = () => {
    modal.forEach((item) => {
      if (!item.style.display) {
        item.style.display = "block";
        document.body.style.overflow = "hidden";
        disableScroll();
      } else {
        item.style.display = "";
        document.body.style.overflow = "";
        enableScroll();
      }
    });
  };
  document.addEventListener("click", (e) => {
    e.target.classList.contains("fancyboxModal") && openModal();
    e.target.closest(".modal-close") && openModal();
    e.target == modalOverlay && openModal();
  });
};
export default modal;
