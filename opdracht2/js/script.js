let alleportfolio = document.querySelectorAll(".portfolio-item");

window.addEventListener("scroll", () => {
  const scrolledlocal = window.scrollY;
  if (scrolledlocal < 700) {
    /*     portfolio.classList.remove("appear");
    portfolio.classList.add("okbye"); */
    alleportfolio.forEach(pitem => {
      pitem.classList.add("okbye");
      pitem.classList.remove("appear");
    });
  } else {
    alleportfolio.forEach(pitem => {
      pitem.classList.add("appear");
      pitem.classList.remove("okbye");
    });
    /*     portfolio.classList.add("appear");
    portfolio.classList.remove("okbye"); */
  }
});
/* portfolio.style.display = "flex"; */
let portfolio = document.querySelector(".portfolio");

console.log(alleportfolio);

// Get the input field
var input = document.querySelector(".body-fixed");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 9) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.querySelector(".more").click();
  }
});

var grammar =
  "#JSGF V1.0; grammar options; public <option> = up | down | poop;";
var recognition = new webkitSpeechRecognition();
var speechRecognitionList = new webkitSpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector(".output");

recognition.start();
console.log("Ready to receive a voice command.");

recognition.onresult = function(event) {
  let option = event.results[0][0].transcript;
  console.log(option);
  let test = document.querySelector("#" + String(option)).click();
  console.log(test);
};
