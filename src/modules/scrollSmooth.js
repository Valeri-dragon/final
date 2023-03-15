const scrollSmooth = () => {
  
  const handleScroll = (e, elem) => {
    e.preventDefault();
    elem.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const scrollToSection = (e) => {
    const targetHref = e.target.getAttribute("href").substr(1);
    const targetElem = document.getElementById(targetHref);
    handleScroll(e, targetElem);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  document.addEventListener("click", (e) => {
    (e.target.closest(".mobile-menu>ul>li>a") ||
      e.target.closest(".top-menu>ul>li>a")) &&
      scrollToSection(e);
       e.target.classList.contains("up") && scrollToTop(e);
  });
   
};
export default scrollSmooth;