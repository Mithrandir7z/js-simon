// Un alert() espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi. 
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//generare 5 numeri con una funzione e li pusha in un array e li stampa con un alert()
var numeriGenerati = [];

function generaNumeri() {
    var numeroPush = Math.floor(Math.random() * 10);

    return numeroPush;
}

for (var i = 0; i < 5; i++) {
    numeroDaPushare = generaNumeri();
    numeriGenerati.push(numeroDaPushare);
    console.log("Numero Generato pushato", numeroDaPushare);
}

alert(numeriGenerati);

console.log("numeriGenerati = []", numeriGenerati);

//parte un setTimeout di 30 secondi (3000 ms) che fa partire una funzione che chiede all'utente con un prompt di inserire 5 numeri e li pusha in un array
var numeriInseriti = [];



//crea una scansione dei numeriGenerati.leght con un for () e dentro il for in serire un'altra iterazione per scansionare i numeriInseriti.leght 
//2 for se numeriGenerati.leght == numeriInseriti.leght allora pusha quel valore in un terzo array e poi incrementa la somma di 1.

setTimeout (inserireNumeri, 30000);

var numeriIndovinati = [];
var sommaNumeriEsatti = 0;

function inserireNumeri () {
    for (var j = 0; j < 5; j++) {
        var numeroAttuale = 0;
        numeroAttuale = prompt("Inserisci i numeri osservati", "Inserisci");
        numeriInseriti.push(numeroAttuale);
        // console.log("Numero Inserito pushato", numeroAttuale);
    }

    for (var k = 0; k < numeriGenerati.length; k++) {
        
    
        for (var z = 0; z < numeriInseriti.length; z++) {
            // console.log("numeriInseriti.length: ", numeriInseriti[z]);
            
            if (numeriInseriti[z] == numeriGenerati[k]) {
                numeriIndovinati.push(numeriInseriti[z]);
                sommaNumeriEsatti = sommaNumeriEsatti + 1;
            }
        }
    }

    //Stampa nel console.log il risultato
    console.log("I numeri indovinati sono: ", numeriIndovinati);
    
    console.log("Il totale dei numeri indovinati è di: ", sommaNumeriEsatti);

}
