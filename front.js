container = document.getElementById('container');

$.get('http://localhost:4000/students', function (response) {
  response.forEach(function (student) {
    const el = document.createElement('div');
    el.innerHTML = student.student_name
    container.appendChild(el);
  })
});

function send () {
  // COTE FRONT

  const input = document.getElementById('nom-etudiant').value;
  console.log(input);
  $.post(
    'http://localhost:4000/students', // defini l'URL d'envoie vers le serveur
    {tomate : input}, // defini ce qu'il envoie au serveur
    function (response) { // defini la fonction execute quand le serveur repond
      console.log(response);
  });
}




























