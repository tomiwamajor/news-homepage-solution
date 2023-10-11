const open = document.querySelector(".hidden");
const close = document.querySelector("hidden2");
const menu = document.querySelector(".menu-links");

open.addEventListener("click", () => {
  // console.log("You clicked it");
  // document.querySelector(".hidden2").style.display = "block";
  // document.querySelector(".hidden").style.display = "none";
  // document.querySelector(".menu-link").style.visibility = "display";
  menu.classList.toggle("menu-open");
});
