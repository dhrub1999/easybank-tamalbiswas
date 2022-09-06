const hamburger = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("cross");
  nav.classList.toggle("show-nav");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});
