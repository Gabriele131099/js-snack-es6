const clubs = [
      {
        nome: "Juventus", 
        falli : 0 
      } ,
      {
        nome: "Real Madrid",
        falli : 0 
        } ,
      {
        nome: "Barcellona",
        falli : 0 
      }   
  ]
  let falliTanti;  // qui metterò l'oggetto club
  let moreFalli = 0; 
  const stampa = document.getElementById('stampa') 
  let variabileRandom = ''
  const numRandom = (min,max) => Math.floor(Math.random()*max - min +1)+min
  for (let i = 0; i < clubs.length; i++) { 
    clubs[i].punti = numRandom(0,100)
    clubs[i].falli = numRandom(0,10)
      const {falli} = clubs[i];
      if (falli > moreFalli) {
        falliTanti = clubs[i];
        moreFalli = falli;
      }      
    }
for (let i = 0; i < clubs.length; i++) {
  if (clubs[i].falli < moreFalli) {
    variabileRandom += '<li>club: '   
    variabileRandom += clubs[i]['nome'] + ', ' 
    variabileRandom += clubs[i]['falli'] + ', '  
    variabileRandom += clubs[i]['punti'] + ', '
    variabileRandom += '</li>' 
  } else {
    variabileRandom += '<li  style="background-color: yellow;">club: '  
    variabileRandom += clubs[i]['nome'] + ', ' 
    variabileRandom += clubs[i]['falli'] + ', '  
    variabileRandom += clubs[i]['punti'] + ', '
    variabileRandom += '</li>'
  }
}
  

console.log(moreFalli)
stampa.innerHTML = variabileRandom





