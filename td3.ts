import promptSync from 'prompt-sync';
const prompt = promptSync();

/*************** 
function sum(numA :number , numB :number) {
    return numA + numB
    
}

console.log(sum(2,7));
*/
/*
function verif(numA :number , numB :number) {
    if ((numB % numA) == 0){
    return "divisible"
    }
    else {
        return "non divisible"
    }
}

console.log(verif(2,4));

*/
/*
function division(numA :number , numB :number) {
    let rest :number = numA % numB;
    let i :number = Math.trunc(numA / numB)
    return "quotient :" + i + "reste :" + rest
}

console.log(division(14 , 5));

*/

/*
function vowel( chain :string) {
    if (chain == "a" || chain == "e" || chain == "i" || chain == "o" || chain == "u" || chain == "y"){
        return "voyelle"

    }
    else {
        return "consonne"
    }
}

let phrase :string = prompt("entrer lettre : ")
console.log(vowel(phrase));
*/

/*
function value(numA :number) {
    return Math.abs(numA)
    
}
console.log(value(-3));

*/

/*   exo 2 

function minus( letter : string) {
    let lower :string = "abcdefghijklmnopqrstuvwxyz"
    let upper :string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < lower.length; i++ ){
        if (letter == lower[i] ){
            return  upper[i]
        }
    }
    
}
console.log(minus("g"));

*/

/************** exo2
function isPerfect(nmbr: number) {
    let sum = 0;
    for (let i = 1; i < nmbr; i++) {
        let mod = nmbr % i;
        if (mod == 0) {
            sum = sum + i;
        }
    }
    if (sum == nmbr) {
        return true

    } else {
        return false
    }
}

function callPerfect(){
    for (let i = 1; i < 10000; i++) {
        if (isPerfect(i) == true){
            console.log(i);
            

        }   
    }
}
console.log(callPerfect());

*/

/**************exo4 
function palindrom(word :string) {
    if (word.length < 2){
        return false
    }
    for (let i = 0; i <= word.length; i++) {
        for (let j = word.length - 1; j <= word.length; j--) {
            if (word[i] == word[j]){
                return true
            }
            else {
                return false
            }   
            }
        } 
    }
    
console.log(palindrom("kayap"));
*/

/************exo 4 corrigé */
function palindrom(word: string) { 
    let inverseWord: string = ""
    if (word.length < 2) {
        return false
    }
    for (let i = word.length - 1; i >= 0; i--) {
        inverseWord = inverseWord + word[i];
        
    }
    if ( inverseWord == word){
        return true
    }else {
        return false
    }
    
}

console.log(palindrom(""));

