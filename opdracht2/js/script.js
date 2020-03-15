window.addEventListener("scroll", function() {
  console.log("Scrolled");
});

let scrollBtn = document.querySelector(".scrollbtn");
let body = document.querySelector(".scrollArea");
let nav = document.querySelectorAll(".nav");

scrollBtn.addEventListener("click", function() {
  body.classList.toggle("smooth-up");
});

navup.addEventListener("click", function() {
  navup.classList.toggle("smooth-up");
});

navdown.addEventListener("click", function() {
  navdown.classList.toggle("smooth-down");
});
