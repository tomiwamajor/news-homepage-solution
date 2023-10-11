const open = document.querySelector(".hidden");
const close = document.querySelector("hidden2");
const menu = document.querySelector(".menu-links");
const home = document.querySelector(".home");
const newEl = document.querySelector(".new");
const popular = document.querySelector(".popular");
const trending = document.querySelector(".trending");
const categories = document.querySelector(".categories");

open.addEventListener("click", () => {
  // console.log("You clicked it");
  // document.querySelector(".hidden2").style.display = "block";
  // document.querySelector(".hidden").style.display = "none";
  // document.querySelector(".menu-link").style.visibility = "display";
  menu.classList.toggle("menu-open");
});

home.addEventListener("click", () => {
  menu.classList.remove("menu-open");
});
newEl.addEventListener("click", () => {
  menu.classList.remove("menu-open");
});
popular.addEventListener("click", () => {
  menu.classList.remove("menu-open");
});
trending.addEventListener("click", () => {
  menu.classList.remove("menu-open");
});
categories.addEventListener("click", () => {
  menu.classList.remove("menu-open");
});
