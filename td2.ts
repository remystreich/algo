import promptSync from 'prompt-sync';
const prompt = promptSync();

/**************EXO1 

let nDossard : number = 0;
let time : number = 0;

while (nDossard != -1) {
    nDossard = parseInt(prompt("entrez le numéro du dossard"));
    if (nDossard == -1){
        break;
    }
    time = parseInt(prompt("entrez le temps du concurrent"))
    
}

*/
/**********************EXO 2 

let minuts: number = parseInt(prompt("Minutes"))
let seconds: number = parseInt(prompt("Secondes"))

while (seconds > 0 && minuts > 0) {
    while (seconds > 0) {
        console.log(minuts + "m" + seconds + "s");
        seconds--;
    }
    seconds = 59
    minuts--
    if (minuts == 0) {
        while (seconds > 0) {
            console.log(minuts + "m" + seconds + "s");
            seconds--;
        }
        
    }
    
    
    console.log(minuts + "m" + seconds + "s");
    

}

*/

/*

let minuts: number = parseInt(prompt("Minutes"))
let seconds: number = parseInt(prompt("Secondes"))

for (let i = minuts ; i > 0 ; i--){
    for (let j = seconds ; j > 0 ; j--){
        console.log(i + "min" + j + "s");
        
    }
}
*/
/************exo3 
let economy :number = 0;
for (let age = 1; age <= 10; age++) {
    economy = economy + 150 + (age*3)
    
}

console.log(economy);

*/

/******************exo4
let biggest = 0
let choice : number

for (let i = 0; i < 20; i++) {
    
     choice  = parseInt(prompt("entrer nombre"))
    if (choice > biggest){
        biggest = choice
    }
   


    
}
console.log(biggest);

    */

/************exo5 

let taille :number = 0
let nmbSmallest :number = 0

for (let i = 0; i < 6; i++){
    taille = parseInt(prompt("entrer taille :"))
    if (taille < 210 ){
        nmbSmallest++
    }
}
    
console.log(nmbSmallest);

*/
/**********************exo6 
let oui :number = 0;
let non : number =0;
let blanc :number = 0; 
let vote =""

for (let i = 1; i<=5; i++ ) {
    
    vote = prompt("Votez O(oui), N(non) ou B(blanc)." )
    if ( vote == "O"){
        oui++
    }
    else if ( vote == "N"){
        non++

    }
    else {

        blanc++
    }
    
    console.log("Nombre de vote : " + i + "Nombre de oui :" + (oui / i * 100) + "%" + "Nombre de non :" + (non / i * 100) + "%" + "Nombre de blanc :" + (blanc / i * 100) + "%" );
}


*/

/*************** exo8 v1

let number :number = parseInt(prompt("entrer nombre"))

for (let i = 1;   i < 6 ; i++ ){
    number++
    console.log(number);     
        
}
    */
    
/*******************exo8 V2 
let number :number = parseInt(prompt("entrer nombre"));
let loop :number = 0;

while (loop < 6){
    loop++
    number++
    console.log(number);
    
}
*/
/*exo9
let paris :number = 50;
let nantes :number = 300;
let year :number = 1

while ( paris < nantes){
    paris = paris + 100;
    nantes = nantes + (nantes * 0.12);
    year++

}
console.log(year);

*/


/************compteur de voyelles 
let chaine = "Enfant, on vous dira plus tard que le grand-père Vous adorait ; qu'il fit de son mieux sur la terre,Qu'il eut fort peu de joie et beaucoup d'envieuxQu'au temps où vous étiez petits il était vieux,";
let vowel :number = 0;

for (let i = 0; i < chaine.length; i++ ) {
    if (chaine[i] == "a" || chaine[i] == "e" || chaine[i] == "i" || chaine[i] == "o" || chaine[i] == "u" || chaine[i] == "y"  ){
    vowel++
    }
    
    
}
console.log(vowel);

*/


/****************exo 10 */




let number :number = parseInt(prompt("entrer nombre"));
let entier :number = 2;
let loop :number = 0;
let result :number = 1;

while (loop < number){
    result = result * (entier * entier);
    entier = entier + 2;
    loop ++;
}

console.log(result);
