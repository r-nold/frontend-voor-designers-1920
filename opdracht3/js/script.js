let htmlCases = document.querySelector(".casesHtml");
let htmlNewCases = document.querySelector(".todayCasesHtml");
let htmlDeaths = document.querySelector(".deathsHtml");
let htmlNewDeaths = document.querySelector(".todayDeathsHtml");

const urlapi = "https://coronavirus-19-api.herokuapp.com/countries/netherlands";

fetch(urlapi)
  .then(response => {
    return response.json();
  })
  .then(nld => {
    let cases = document.createElement("H2");
    let numberofcases = document.createTextNode(nld.cases);

    let newcases = document.createElement("H2");
    let numberofnewcases = document.createTextNode(nld.todayCases);

    let deaths = document.createElement("H2");
    let numberofdeaths = document.createTextNode(nld.deaths);

    let newdeaths = document.createElement("H2");
    let numberofnewdeaths = document.createTextNode(nld.todayDeaths);

    cases.appendChild(numberofcases);
    htmlCases.appendChild(cases);

    newcases.appendChild(numberofnewcases);
    htmlNewCases.appendChild(newcases);

    deaths.appendChild(numberofdeaths);
    htmlDeaths.appendChild(deaths);

    newdeaths.appendChild(numberofnewdeaths);
    htmlNewDeaths.appendChild(newdeaths);
  });
