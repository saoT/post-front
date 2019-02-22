console.log($);

// EXEMPLE FAIT AVEC L'API SWAPI Star Wars--------------
$.get('https://swapi.co/api/people/', function (response) {

  response.results.forEach( function (personnage) {
    const element = document.createElement('div');
    element.innerHTML = personnage.name;
    document.body.appendChild(element);
  });

});
//-----------------------------------------------------

$.get('http://localhost:3000/', function (response, error) {
  console.log(response);
});