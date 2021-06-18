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
  let nomeOggetto;  // qui metterò l'oggetto club
  let falliMax = 0; 
  const stampa = document.getElementById('stampa') 
  let variabileRandom = ''
  const numRandom = (min,max) => Math.floor(Math.random()*max - min +1)+min
for (let i = 0; i < clubs.length; i++) { 
    clubs[i].punti = numRandom(0,100)
    clubs[i].falli = numRandom(0,10)
    const {falli} = clubs[i];
    if (falli > falliMax) {
      nomeOggetto = clubs[i];
      falliMax = falli;
    }      
    console.log(falli)
}

for (let i = 0; i < clubs.length; i++) {
  if (clubs[i].falli < falliMax) {
    variabileRandom += '<li>club: '   
    variabileRandom += clubs[i]['nome'] + ', ' 
    variabileRandom += clubs[i]['punti'] + ', '
    variabileRandom += clubs[i]['falli'] + ', '  
    variabileRandom += '</li>' 
  } else {
    variabileRandom += '<li  style="background-color: yellow;">club: '  
    variabileRandom += clubs[i]['nome'] + ', ' 
    variabileRandom += clubs[i]['punti'] + ', '
    variabileRandom += clubs[i]['falli'] + ', '  
    variabileRandom += '</li>'
  }
}
  

console.log(falliMax)
stampa.innerHTML = variabileRandom





