/*
    1. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
        - inizializzare due variabili con valori randomici da 1 a 6.
    2. Stabilire il vincitore, in base a chi fa il punteggio più alto.
        - utilizzando un if...else stabilire qual è il numero più alto.
*/


// FUNZIONAMENTO DA CONSOLE

// creo una funzione che mi genera il numero randomico con un minimo impostato ad 1 e un massimo impostato a 6
function myRandomNum(min, max){
    return Math.floor(Math.random()* max) + min;
}
// genero due variabili che mi restituiscono due numeri randomici
let numUser = myRandomNum(1,6);
let numPc = myRandomNum(1,6);

console.log(numUser, numPc)

// con la seguente istruzione condizionale verifico qual è il numero randomico più alto

if(numUser > numPc){
    console.log("Hai vinto!")
} else if(numUser < numPc){
    console.log("Hai perso")
}else{
    console.log("Pari")
}
