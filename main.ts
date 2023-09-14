
import promptSync from 'prompt-sync';
const prompt = promptSync();
 
/******************exo2 
let choiceone :number = parseInt(prompt("entrer une valeur"))
let choicetwo :number = parseInt(prompt("entrer deuxieme valeur"))

if (choiceone < choicetwo) {
    console.log(choiceone);
    
}else{
    console.log(choicetwo)
}

 */


/*exo3

import promptSync from 'prompt-sync';
const prompt = promptSync();

let temp :number = parseInt(prompt("entrer température"))

if (temp <=  ) {
    console.log("glace")
} else if (temp >= 100){
    console.log("vapeur");
    
}else{
    console.log("liquide");
    
}

*/

/*

import promptSync from 'prompt-sync';
const prompt = promptSync();

let article :number = parseInt(prompt("Combien de cadres voulez vous?"))

if (article <= 10) {
    console.log(article * 20 + "euro");
    
} else if (article > 30) {
    console.log( 500 + (article - 30 )  * 5 + "euro");
    
}
else {
    console.log(200 + (article - 10) * 15 + "euro");
    
}

*/

/******exo5 
import promptSync from 'prompt-sync';
const prompt = promptSync();

let age :number = parseInt(prompt("Quel age avez vous?"))
let sex = prompt("Quel est votre sexe? f ou h")

if ((sex == "h" && age > 20) || ((age >= 18 && age <= 35) && sex == "f" ))  {
    console.log("imposable");
    
} else {
    console.log("pas imposable");
    
    
}

*/

/*
import promptSync from 'prompt-sync';
const prompt = promptSync();

let gamble :number = parseInt(prompt("pile ou face? "))
let piece = random( 0,1)

function random(min : number, max :number)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}



while (gamble !== 0 && gamble !== 1) {
    console.log("entrez un nombre valide");
    gamble = parseInt(prompt("pariez 1 ou 0 "))
    
}

console.log(piece);

if (piece == gamble) {
    console.log("gagné");
    
} 

else {
    console.log("perdu");
    
}

*/


/* Pierre feuille ciseaux
import promptSync from 'prompt-sync';
const prompt = promptSync();

let gamble :number = parseInt(prompt("Pierre(0), Feuille(1), Ciseaux(2) "))

 
let piece = random( 0,2)

function random(min : number, max :number)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }

while ((gamble != 1) && (gamble != 2) && (gamble != 0)){
    console.log("entrez un nombre valide");
    gamble = parseInt(prompt("Pierre(0), Feuille(1), Ciseaux(2) "))}
    
    if ((gamble == 0 && piece == 2) || (gamble == 1 && piece == 0) || (gamble == 2 && piece == 1)) {
    console.log("gagné");
    
} else if ((gamble == 0 && piece == 1) || (gamble == 1 && piece == 2) || (gamble == 2 && piece == 0)) {
    console.log("perdu");
}
else {
    console.log("égalité");}


*/

/*

import promptSync from 'prompt-sync';
const prompt = promptSync();

let gamble  = prompt("pile ou face? ")
let pieceString = ""
let piece = random( 0,1)
if (piece == 0) {
    pieceString = "pile"
}else if(piece = 1){
    pieceString = "face"
}
function random(min : number, max :number)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}




while (gamble !== "pile" && gamble !== "face") {
    console.log("entrez un nombre valide");
    gamble = prompt("pariez pile ou face ")
    
}


if (pieceString == gamble) {
    console.log("gagné");
    
} 

else {
    console.log("perdu");
    
}
console.log(pieceString);


*/

/*
let compteur = 0;


while (compteur < 10){
    console.log(compteur);
     compteur++
    
}
console.log(compteur);
*/

let array = 11

for (let i = 0; i < array; i++) {
    console.log(i);
    
    
}




