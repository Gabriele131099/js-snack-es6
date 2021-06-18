const clubs = [
    {
        nome: "Juventus",
       
      } ,
      {
        nome: "Real Madrid",
        } ,
      {
        nome: "Barcellona",
      }   
  ]

let variabileRandom = ''
const stampa = document.getElementById('stampa') 
const numRandom = (min,max) => Math.floor(Math.random()*max - min +1)+min
for (let i = 0; i < clubs.length; i++) { 
  clubs[i].punti = numRandom(0,100)
  clubs[i].falli = numRandom(0,3)
  
  if (clubs[i].falli) {
    variabileRandom += '<li>club: '    // voglio stampare in un ul , tramide degli LI
    variabileRandom += clubs[i]['nome'] + ', '  
    variabileRandom += clubs[i]['punti'] + ', '   
    variabileRandom += clubs[i]['falli'] + ', '
    variabileRandom += '</li>'
  } else {
    
  }
}

stampa.innerHTML = variabileRandom

