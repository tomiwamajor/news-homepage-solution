const open = document.querySelector(".hidden");
const close = document.querySelector("hidden2");

open.addEventListener("click", function () {
  console.log("You clicked it");
  document.querySelector(".hidden2").style.display = "block";
  document.querySelector(".hidden").style.display = "none";
  document.querySelector(".menu-link").style.visibility = "display";
});
