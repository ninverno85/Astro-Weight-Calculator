// Write your JavaScript code here
var planets = [
  {'Sun', 27.9},
  {'Mercury', 0.377},
  {'Venus', 0.9032},
  {'Earth', 1},
  {'Moon', 0.1655},
  {'Mars', 0.3895},
  {'Jupiter', 2.640},
  {'Saturn', 1.139},
  {'Uranus', 0.917},
  {'Neptune', 1.148},
  {'Pluto', 0.06}
];

var select = document.getElementById('planetSelect');
for (i=0; i<= planets.length;i++){
  var planetName = planet[i][0];
  var opt = document.createElement('option')
  opt.textContext = planetName;
  opt.value = planetName;
  select.appendChild(opt);
}






document.getElementById("output").innerHTML = story;
console.log(planets[i])


document.createElement()
}




f
int[][] myArray = new int[cols][rows];
// Two nested loops allow us to visit every spot in a 2D array.
// For every column I, visit every row J.
for (int i = 0; i < cols; i++) {
  for (int j = 0; j < rows; j++) {
    myArray[i][j] = 0;
  }
}
