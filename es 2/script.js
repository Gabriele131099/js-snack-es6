const giocatore = [
    {
        nome: "Juventus",
        punti: 0,
        falli: 0,
       
      } ,
      {
        nome: "Real Madrid",
        punti: 0,
        falli: 0,
        } ,
      {
        nome: "Barcellona",
        punti: 0,
        falli: 0,
      }   
  ]
const arrayGiocatore = []
const stampa = document.getElementById('stampa') 
const numRandom = (min,max) => Math.floor(Math.random()*max - min +1)+min
for (let i = 0; i < giocatore.length; i++) { 
  giocatore[i].punti = numRandom(0,100)
  giocatore[i].falli = numRandom(0,3)
  const{nome , falli} = giocatore[i]
  arrayGiocatore[i]={
      nome , falli
  } 
}
