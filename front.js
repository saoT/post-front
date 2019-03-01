console.log($);

// EXEMPLE FAIT AVEC L'API SWAPI Star Wars--------------
/*
$.get('https://swapi.co/api/people/', function (response) {

  response.results.forEach( function (personnage) {
    const element = document.createElement('div');
    element.innerHTML = personnage.name;
    document.body.appendChild(element);
  });

});
*/
//-----------------------------------------------------
// ON utilise un CLIENT HTTP
// Une librairie qui permet de requeter des sites
// via des methodes/verbes HTTP -> GET / POST...
// Ici on va utiliser jquery, lmais il y en a plein d'autres (axios, $http, superagent, etc...)


// $.get c'est un peu comme un telephone portable qu'on donne a notre front
// Par contre quand on compose le numero on est obligé de mettre le 06
// -> http://localhost:3000
$.get('http://localhost:3000/students', function (response) {
  response.forEach(function (student) {
    const div = document.createElement('div');
    div.innerHTML = student.student_name;
    document.body.appendChild(div)
  })
});

function send () {
  var student_name = document.querySelector('#student_name').value;
  console.log(student_name);
  $.post('http://localhost:3000/students', {student_name : student_name}, function (response) {
     console.log(response);
  });
}

































