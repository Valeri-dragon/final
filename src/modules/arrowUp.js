const arrowUp = () => {
  const clientHeight = document.documentElement.clientHeight;
     let arrowUp = document.querySelector(".up");
     arrowUp.style.display = "none";
  window.addEventListener("scroll", () => {
 
    if (
      document.body.scrollTop > clientHeight ||
      document.documentElement.scrollTop > clientHeight
    ) {
      arrowUp.style.display = "block";
    } else {
      arrowUp.style.display = "none";
    }
  });
};
export default arrowUp;