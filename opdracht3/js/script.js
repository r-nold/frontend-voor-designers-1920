// Aanmaken van variabelen om de HTML elementen op te halen
let htmlCases = document.querySelector(".casesHtml");
let htmlNewCases = document.querySelector(".todayCasesHtml");
let htmlDeaths = document.querySelector(".deathsHtml");
let htmlNewDeaths = document.querySelector(".todayDeathsHtml");

function getTheData() {
  // Bron van de API en het ophalen ervan
  var apiData = fetch(
    "https://covid-19-data.p.rapidapi.com/country?format=undefined&name=netherlands",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "795ebcbd3emshfbe78a7408abecdp12d4b3jsn286d61d78529",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var storedData = data[0];
      console.log(storedData);
      let cases = document.createElement("H2");
      let numberofcases = document.createTextNode(storedData.confirmed);
      cases.appendChild(numberofcases);
      htmlCases.appendChild(cases);

      let deaths = document.createElement("H2");
      let numberofdeaths = document.createTextNode(storedData.deaths);
      deaths.appendChild(numberofdeaths);
      htmlDeaths.appendChild(deaths);
    })
    .catch((err) => {
      console.log(err);
    });
}

getTheData();
