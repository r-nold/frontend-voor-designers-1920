//Maakt variabele aan en zet daar alle elementen in met classname .movie-thumb
let films = document.querySelectorAll(".movie-thumb");
let selectedfilms = document.querySelectorAll(".selected");
//Gaat door ieder element heen in de let films en voert actie uit
films.forEach(function(film) {
  //

  //Check of er geklikt wordt op een van de elementen
  film.addEventListener("click", function(event) {
    //Voegt een .selected class toe na klikken
    film.classList.toggle("selected");
    //
    //console.log(event.target.classList[1]);
    if (film.classList.contains("selected")) {
      let faved = document.createElement("li");
      faved.classList.add("f-selected");
      faved.classList.add(event.target.classList[1]);
      let list = document.querySelector(".fav-sidebar");
      list.appendChild(faved, list);
    } else {
      let list = document.querySelector(".fav-sidebar");
      let target1 = "." + event.target.classList[1];
      let listitem = document.querySelector(target1);
      list.removeChild(listitem);
    }
  });
});
