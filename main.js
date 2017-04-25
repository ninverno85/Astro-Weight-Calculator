//Adding the planets array
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['the Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['the Sun', 27.9]
];

//Adding code to dynamically generate planets dropdown
var select = document.getElementById('planets');
for (i = 0; i < planets.length; i++) {
  var planetName = planets[i][0];
  var opt = document.createElement('option')
  opt.innerText = planets[i][0];
  opt.value = planets[i][1];
  opt.textContent = planetName;
  select.appendChild(opt);
}

/*Adding core business logic.
    The following function is used to calculateWeight*/

document.getElementById('calculateWeight').onclick = function handleClickEvent(ev) {
  // Making variables for the user input of weight and a planet
  var userWeight = document.getElementById('userWeight').value;
  var userChoice = document.getElementById('planets').selectedIndex;
  var planetName = document.getElementById('planets').options[userChoice].text;
  // Making the gravity variable based on which planet the user selects.
  var gravity = document.getElementById('planets').value;
  /* Makeing a variable for the weight on the planet the user would select
   round that result to two decimal places */
  var planetWeight = Math.round(userWeight * gravity);
  // Printing to the story variable to display the results for the user to view.
  var story = 'Your ' + 'weight ' + 'on ' + planetName + ' is ' + planetWeight  + 'lbs!';
  document.getElementById("output").innerHTML = story;
}






//var planetName = document.getElementById('planets').options[userChoice];
//var sel(Index) = document.getElementById('plenetSelect').selectIndex;
//var selGravity = document.getElementById('planetSelect')[select index].value
