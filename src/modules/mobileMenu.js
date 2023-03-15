const mobileMenu = () => {
  const menu = document.querySelector(".mobile-menu");
  document.addEventListener("click", (e) => {
    e.target.classList.contains("mob-menu-btn") &&
      menu.classList.toggle("open");
    e.target !== menu &&
      !e.target.classList.contains("mob-menu-btn") &&
      menu.classList.remove("open");
  });
};
export default mobileMenu;