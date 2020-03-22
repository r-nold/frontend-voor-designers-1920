// Aanmaken van variabelen om de HTML elementen op te halen
let htmlCases = document.querySelector(".casesHtml");
let htmlNewCases = document.querySelector(".todayCasesHtml");
let htmlDeaths = document.querySelector(".deathsHtml");
let htmlNewDeaths = document.querySelector(".todayDeathsHtml");

// Bron van de API
const urlapi = "https://coronavirus-19-api.herokuapp.com/countries/netherlands";

// Ophalen van de API gegevens in JSON formaat en dit in de variabele nld zetten
fetch(urlapi)
  .then(response => {
    return response.json();
  })
  .then(nld => {
    // Het aanmaken van de HTML elementen om later de data aan toe te voegen
    let cases = document.createElement("H2");
    let numberofcases = document.createTextNode(nld.cases);

    let newcases = document.createElement("H2");
    let numberofnewcases = document.createTextNode(nld.todayCases);

    let deaths = document.createElement("H2");
    let numberofdeaths = document.createTextNode(nld.deaths);

    let newdeaths = document.createElement("H2");
    let numberofnewdeaths = document.createTextNode(nld.todayDeaths);

    //Het toevoegen van de opgehaalde gegevens aan nieuw aangemaakte H2 elementen met daarin nieuwe text nodes
    cases.appendChild(numberofcases);
    htmlCases.appendChild(cases);

    newcases.appendChild(numberofnewcases);
    htmlNewCases.appendChild(newcases);

    deaths.appendChild(numberofdeaths);
    htmlDeaths.appendChild(deaths);

    newdeaths.appendChild(numberofnewdeaths);
    htmlNewDeaths.appendChild(newdeaths);
  });
