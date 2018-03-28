/*
   *** Esercizio Facoltativo ***
   Chiedi all'utente di inserire un numero massimo (chiamato max) e un numero minimo (chiamato min) con due prompt diversi.
   In seguito devi chiedere all'utente un numero positivo, che chiamiamo N.

   Il programma dovrà generare N array, ogni array sarà formato da 10 numeri interi random contenuti nel range min e max.

   Una volta costruiti questi array, il programma dovrà generare una lista delle occorrenze.
   Nello specifico, guardando tutti i numeri inclusi in tutti gli array, dovrà indicare quante volte compare ogni
   numero in tutti gli array.

   es N = 2, min = 1, max = 2;

   [2,2,1,2,1,2,1,1,1,1]
   [1,1,1,2,1,2,2,2,2,1]

   Output:
   1 -> 11 occorrenze
   2 -> 9 occorrenze (edit

*/


var min = parseInt(prompt("Inserisci il minimo: "));
var max = parseInt(prompt("Inserisci il masssimo: "));
var N = parseInt(prompt("Inserisci il numero di array da generare: "));

var arrContainer = new Array();

//Generazione di N array contenenti 10 elementi ognuno
for (var i = 0; i < N; i++) {
   var temp = randomNumber(min, max, 10);
   arrContainer.push(temp);
   //arrTotalValue.unshift(sumArrElement(temp));
}

console.log(arrContainer);


var res = countAOccurence(arrContainer, min, max);
console.log(res);




function countAOccurence(arr, min, max) {
   var count = 0;
   // var occ = new Array(arraySize);
   var arraySize = max-min+1;
   var occorrenze = {};

   for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
         if ( (arr[i][j] >= min) && (arr[i][j] <= max) ) {
            //console.log("array value:" + arr[i][j]);
            var key = (arr[i][j]-min).toString();
            //console.log("key:" + key);
            if ( Object.keys(occorrenze).includes(key) ) {
               //console.log("Esiste: " + isKeysExist(occorrenze, key));
               // console.log(occorrenze[key]);
               occorrenze[key] += 1;
            } else {
               //console.log("Non Esiste: " + isKeysExist(occorrenze, key));
               occorrenze[key] = 1;
            }
         }
      }
   }
   return occorrenze;
}









//Funzione che genera howMany numeri casuali compresi tra l'estremo inferiore start
//e l'estremo superiore end, inclusi.
function randomNumber(start, end, howMany) {
   var a = new Array();
   for (var i = 0; i < howMany; i++) {
      var rand = Math.floor(Math.random() * (end - start + 1)) + start;
      a.push(rand);
   }
   return a;
}


//Funzione che controlla l'esistenza della keys passata come parametro,
//nell'oggetto passato come parametro. Se l'esito è positivo ritorna l'indice
//in cui si trova quella proprietà altrimenti -1
function isKeysExist(obj, k) {
   var res = false;
   if (Object.keys(obj).includes(k)) {
      //res = Object.keys(obj).indexOf(k);
      res = true;
   }
   return res;

}
