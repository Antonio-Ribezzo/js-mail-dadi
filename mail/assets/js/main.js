/*
  1. Creo un array contente una serie di indirizzi Mail
  2. Chiedi all’utente la sua email.
    - utilizzo un form con input
  3. Controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato sull’esito del        controllo.
    - Utilizzando il tasto "submit" del form faccio il scorro l'array utilizzando un ciclo for.
    - Con un if...else stampo il messaggio
*/

// PARTE INIZIALE - CODICE REALIZZATO PER FUNZIONARE IN CONSOLE E CON L'UTILIZZO DEL PROMPT

// // comincio utilizzando la console per risolvere l'esercizio
// // costruisco un ipotetico database di indirizzi email
// let email = ["pinco@yahoo.it", "pallo@gmail.com", "panco@yahoo.it", "tizio@gmail.com", "caio@gmail.com"]

// // stampo in console il database
// console.log(email)

// // chiedo all'utente di inserire la propria mail
// let myEmail = prompt("inserisci la tua mail")

// // stampo in console la mail digitata dall'utente
// console.log(myEmail)

// // inizializzo la variabile "match" che mi servirà per il ciclo for successivo
// let match = false;

// // con il seguente ciclo for vado a scorrere il database di email creato (array) per confrontarlo con la mail digitata dall'utente. Il ciclo for mi restituisce o un valore true (esiste un matching) o un valore false (non esiste un matching)
// for(let i = 0; i <= email.length - 1; i++){
//   if (email[i] == myEmail) {
//     match = true;
//   }
// }

// // con la seguente istruzione condizionale vado a stampare in console il risultato.
// if(match){
//   console.log(`la mail corrisponde: puoi accedere!`)
// } else{
//   console.log(`la mail non corrisponde: registrati e poi accedi`)
// }


// UTILIZZO DEI TAG INPUT DELL'HTML

// costruisco un ipotetico database di indirizzi email
let email = ["pinco@yahoo.it", "pallo@gmail.com", "panco@yahoo.it", "tizio@gmail.com", "caio@gmail.com"]

// stampo in console il database
console.log(email)

//creo la funzione che verrà associata al button tramite onclick

function myFunction(){
  // salvo in una variabile la mail digitata dall'utente nel tag input del form
  let myEmail = document.getElementById("e-mail").value;
  
  // stampo in console la mail digitata dall'utente
  console.log(myEmail);

  // // inizializzo la variabile "match" che mi servirà per il ciclo for successivo
  let match = false;

  // // con il seguente ciclo for vado a scorrere il database di email creato (array) per confrontarlo con la mail digitata dall'utente. Il ciclo for mi restituisce o un valore true (esiste un matching) o un valore false (non esiste un matching)
  for(let i = 0; i <= email.length - 1; i++){
    if (email[i] == myEmail) {
      match = true;
    }
  }

  // // con la seguente istruzione condizionale vado a comunicare il risultato.
  if(match){
    document.getElementById("results").innerHTML= `<h1 class="text-success">La mail corrisponde: puoi accedere!</h1>`
  } else{
    document.getElementById("results").innerHTML = `<h1 class="text-danger">La mail non corrisponde: registrati e poi accedi</h1>`
  }
}

