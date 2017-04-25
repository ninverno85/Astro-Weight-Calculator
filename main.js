// Write your JavaScript code here
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

var select = document.getElementById('planetSelect');
for (i=0; i<planets.length;i++){
  var planetName = planets[i][0];
  var opt = document.createElement('option')
  opt.innerText = planets[i][0];
  opt.value = planets[i][1];
  opt.textContent = planetName;
  select.appendChild(opt);
}

document.getElementById('calculateWeight').onclick = function handleClickEvent(ev){
  alert('Hello!');
  var userWeight = document.getElementById('userWeight').value;
  var userChoice = document.getElementById('planetSelect').selectedIndex;
  var gravity = document.getElementById('planetSelect').value;
  console.log('Your ' + 'weight ' + 'on ' + 'planet ' + userChoice + ' is ' + (userWeight * gravity) + '!');
}


//var planetName = document.getElementById('planetSelect').options[userChoice];
//var sel(Index) = document.getElementById('plenetSelect').selectIndex;
//var selGravity = document.getElementById('planetSelect')[select index].value
