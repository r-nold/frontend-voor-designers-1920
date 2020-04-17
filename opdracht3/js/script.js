//Functie om ervoor te zorgen dat er maar 1 enkele optie geselecteerd kan worden
function selectedCheck() {
  if (ps4selected == true) {
    ps4selected = !ps4selected;
    ps4.classList.remove("selected");
  }
  if (xboxselected == true) {
    xboxselected = !xboxselected;
    xbox.classList.remove("selected");
  }
  if (pcselected == true) {
    pcselected = !pcselected;
    pc.classList.remove("selected");
  }
  if (switchselected == true) {
    switchselected = !switchselected;
    nswitch.classList.remove("selected");
  }
}

//Hulptool om uit te lezen of de variabelen goed gemanipuleerd worden
function logger() {
  console.clear();
  console.log("ps4:" + ps4selected);
  console.log("xbox:" + xboxselected);
  console.log("pc:" + pcselected);
  console.log("switch:" + switchselected);
}

//API functie
function getResults() {
  // Bron van de API en het ophalen ervan
  var url = new URL("https://rawg-video-games-database.p.rapidapi.com/games");

  // De parameters die in de query gezet worden, dit gebeurt dynamisch op basis van input van de gebruiker
  var params = {
    platforms: cplatform,
    rating: crating,
    genres: cgenre,
    ordering: "-rating",
  };
  //Het toevoegen van de parameters in de url
  url.search = new URLSearchParams(params).toString();
  // API keys voor authorisatie via RapidApi
  var apiData = fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
      "x-rapidapi-key": "795ebcbd3emshfbe78a7408abecdp12d4b3jsn286d61d78529",
    },
  }) //Omzetten van de response naar json format
    .then((response) => {
      return response.json();
    })
    //opslaan van de json data in variabele in de vorm van array
    .then((data) => {
      var storedData = data;
      gameX = [
        storedData.results[0],
        storedData.results[1],
        storedData.results[2],
        storedData.results[3],
        storedData.results[4],
        storedData.results[5],
      ];

      //Om meerdere opties te laten zien, worden de 6 topresultaten willekeurig gemaakt
      //zodat er voldoende afwisseling is
      const randomGame = gameX[Math.floor(Math.random() * gameX.length)];
      //De game wordt in de html gezet, en scrollt hierna automatisch naar de game
      var gamePlace = document.querySelector(".gamePlace");
      var gameImg = randomGame.background_image;
      gamePlace.innerHTML = "<h1>" + randomGame.name + "</h1>";
      gamePlace.style.backgroundImage = "url(" + gameImg + ")";
      gamePlace.style.backgroundSize = "cover";
      gamePlace.style.backgroundRepeat = "no-repeat";
      gamePlace.style.height = "600px";
      window.location.href = "#game";
    })
    .catch((err) => {
      console.log(err);
    });
}

//De filters (Slider, buttons en dropdown)
var slider = document.getElementById("rating");
var output = document.getElementById("demo");
let go = document.querySelector(".go");
let genre_element = document.querySelector("#genre");

var cplatform;
var cgenre = "action";
var crating;

var ps4selected = false;
var xboxselected = false;
var pcselected = false;
var switchselected = false;

let ps4 = document.querySelector(".ps4");
let xbox = document.querySelector(".xbox");
let pc = document.querySelector(".pc");
let nswitch = document.querySelector(".switch");

output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
  crating = slider.value;
};

// Event listeners om te kijken welke opties geselecteerd worden
ps4.addEventListener("click", function (hoi) {
  selectedCheck();
  ps4selected = true;
  if (ps4selected == true) {
    cplatform = 18;
    ps4.classList.add("selected");
  }
});
xbox.addEventListener("click", function (hoi) {
  selectedCheck();
  xboxselected = true;
  if (xboxselected == true) {
    cplatform = 1;
    xbox.classList.add("selected");
  }
});
pc.addEventListener("click", function (hoi) {
  selectedCheck();
  pcselected = true;
  if (pcselected == true) {
    cplatform = 4;
    pc.classList.add("selected");
  }
});
nswitch.addEventListener("click", function (hoi) {
  selectedCheck();
  switchselected = true;
  if (switchselected == true) {
    cplatform = 7;
    nswitch.classList.add("selected");
  }
});

genre_element.oninput = function () {
  cgenre = this.value;
};

//De grote playbutton die alles in gang zet
go.addEventListener("click", function (iets) {
  /*   console.log(cplatform);
  console.log(cgenre);
  console.log(crating); */
  getResults();
});
