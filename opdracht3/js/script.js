// Aanmaken van variabelen om de HTML elementen op te halen
let htmlCases = document.querySelector(".casesHtml");
let htmlNewCases = document.querySelector(".todayCasesHtml");
let htmlDeaths = document.querySelector(".deathsHtml");
let htmlNewDeaths = document.querySelector(".todayDeathsHtml");

function getTheData() {
  // Bron van de API en het ophalen ervan
  var apiData = fetch(
    "https://rawg-video-games-database.p.rapidapi.com/games",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "795ebcbd3emshfbe78a7408abecdp12d4b3jsn286d61d78529",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var storedData = data;
      console.log(storedData.results[0].metacritic);
    })
    .catch((err) => {
      console.log(err);
    });
}

getTheData();
