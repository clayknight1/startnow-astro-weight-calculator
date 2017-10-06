
var select = document.getElementById('planets');
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
  for(let i = 0; i < planets.length; i++) {
      var opt = planets[i];
      var el = document.createElement('option');
      el.textContent = opt[0];
      el.value = opt[0];
      select.appendChild(el);
  }

  function calculateWeight(userWeight, planetName) {
    for(var i = 0; i < planets.length; i++) {
        if (planets[i][0] == planetName) {
        return userWeight * planets[i][1];
    }
  }
}
  function handleClickEvent(e){ 
            const planetName =  $('#planets').find(':selected').text();
            const userWeight = $('#user-weight').val();
            const result = calculateWeight(userWeight, planetName);
            $('#output').text("If you were on "+ planetName +", you would weigh "+ result +"lbs!");
        };
       


    