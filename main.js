//Adding the planets array
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

//Adding code to dynamically generate planets dropdown
var select = document.getElementById('planets');
for (i=0; i<planets.length;i++){
  var planetName = planets[i][0];
  var opt = document.createElement('option')
  opt.innerText = planets[i][0];
  opt.value = planets[i][1];
  opt.textContent = planetName;
  select.appendChild(opt);
}


//Adding core business logic
document.getElementById('singlebutton').onclick = function handleClickEvent(ev){
  alert('Hello!');
  var userWeight = document.getElementById('userWeight').value;
  var userChoice = document.getElementById('planets').selectedIndex;
  var gravity = document.getElementById('planets').value;
  var planetWeight = Math.round((userWeight * gravity) * 100) / 100;

  console.log('Your ' + 'weight ' + 'on ' + 'planet ' + userChoice + ' is ' + planetWeight + '!');
  var story = 'Your ' + 'weight ' + 'on ' + 'planet ' + userChoice + ' is ' + planetWeight + '!';
  document.getElementById("output").innerHTML = story;
  }





//var planetName = document.getElementById('planetSelect').options[userChoice];
//var sel(Index) = document.getElementById('plenetSelect').selectIndex;
//var selGravity = document.getElementById('planetSelect')[select index].value
