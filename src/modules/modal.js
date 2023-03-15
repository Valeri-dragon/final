const modal = () => {
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalContent = document.querySelector(".modal-callback");
  const modal = [modalOverlay, modalContent];
  const openModal = () => {
    modal.forEach((item) => {
      if (!item.style.display) {
        item.style.display = "block";
        document.body.style.overflow = "hidden";
      } else {
        item.style.display = "";
        document.body.style.overflow = "";
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