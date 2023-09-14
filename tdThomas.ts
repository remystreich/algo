
import promptSync from 'prompt-sync';
const prompt = promptSync();
/*********** 
let restSupply :string [] = []
let supply :string [][] = [
    ["pates", "riz" , "fraise"],
    ["pq" , "lessive" , "stylo" ],
    
]

for (let i = 0; i < supply.length; i++) {
    for (let j = 0; j < supply[i].length; j++) {
        if (supply[i][j] != 'fraise'){
            restSupply.push(supply[i][j])

        }
    }  
}
console.log(restSupply);
*/
/*************morpion 
let morpion: string[][] = [
    ["x", "x", "o"],
    ["x", "o", "o"],
    ["o", "o", "x"]
]

let test: number = 0;



function checkWin(morpion:string[][]) {
    for (let i = 0; i < morpion.length; i++) {
        if (morpion[i][0] == morpion[i][1] && (morpion[i][1]) && (morpion[i][1] == morpion[i][2])) {
            return morpion[i][0];
        }
         if (morpion[0][i] == morpion[1][i] && (morpion[2][i]) && (morpion[i][1] == morpion[i][2])){
            return morpion[0][i];
         }
         if (morpion[0][0] == morpion[1][1] && morpion[1][1] == morpion[2][2]){
            return morpion[0][0];
         }
         if (morpion[0][2] == morpion[1][1] && morpion[1][1] == morpion[2][0]){
            return morpion[0][2];
         }else{
            return "draw"
         }
    }
}

console.log(checkWin(morpion));

*/
/******exo 1 

function repeatString(str : string , nmbr : number){
    let result :string =""
    while (nmbr > 0){
        nmbr--;
        result += str
    }
    
    console.log(result);
    
}
repeatString("abc" , 4)

*/




/************exo2 
function findBiggest(array :number[]) {
    let biggest = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] > biggest) {
        biggest = array[i];
    }  
}
return biggest

}

console.log(findBiggest([1,3,2,88,65,9]));
 
*/
/*************exo3 

function split(str :string , n :number , e:number){
    let result :string =""
    for (let i = n; i <= e; i++) {
        result += str[i]
       
    }
    return result;
}

console.log(split("abcdefgh" , 2 , 4));

*/
/* exo 4
function split(str:string){
    let biggest = "";
    let arrayWord:string[]= str.split(" ");
    for (let i = 0; i < arrayWord.length; i++) {
        if (biggest.length < arrayWord[i].length){
            biggest = arrayWord[i]
        }
    }
    return biggest
}

console.log(split("Salut, je suis développeur"));
*/

/******exo5 
function compare(str:string, baseStr:string){
    let splitStr = baseStr.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
        if ( splitStr[i] === str){
            return true;
        }
    }
    return false
}
console.log(compare("uis", "je suis"));
*/
/******exo6 
let nmbr :string = "";
let multi :number = 10;
while (multi > 0){
    multi--
    nmbr = nmbr + 1
    console.log(nmbr);
    
}
*/
/**************exo7 
function pyramid(str :string = prompt("entrer un caractère") , multi :number = parseInt(prompt("entrer un nombre de ligne"))){
    let result =""
    if (str.length > 1 || multi > 50){
        return false
    }
    while(multi> 0){
        multi--;
        result= result + str
        console.log(result); 
    }
    return true
   
    
}

console.log( pyramid());
*/
/********* exo8 
function reverse(str:string) {
    let result :string = "";
    for (let i = str.length-1; i >= 0; i--) {
        result += str[i]; 
    }
return result
}

console.log(reverse("remy"));
*/
/***********exo9 
function bisextil(year:number){
    let result :number = 0;
    if (year % 100 == 0 ){
        result = (year/100);
        if (result % 4 == 0){
            return true
        }
    }
    else if ( year % 4 == 0){
        return true
    }
    return false
}
console.log(bisextil(23457));
*/
/********exo 10 
function compare(str:string, baseStr:string){
    let result :number = 0;
    for (let i = 0; i < baseStr.length; i++) {
        if (str.length>1){
            return false
        }
        else if (str === baseStr[i]){
            result++
        }
    }
     console.log(result);
     return true
}
console.log(compare("t", "je suis développeur"));
*/
/******exo11 
function isPrimeNumber(n: number) {
    let isNotPrimeNumber: boolean = false;
    for (let i: number = 2; i < n; i++) {
        if (n % i === 0) {
            isNotPrimeNumber = true;
        }
    }
    return !isNotPrimeNumber
}


let nmbr = 0;
for (let i = 2; i < 100; i++) {
    if ( isPrimeNumber(i) == true){
       nmbr += i
       console.log(i);
    }
}
console.log(nmbr);

*/
/*************exo12 
function fibonacci(nmbr :number) {
    let a = 1;
    let b = 1;
    console.log(b);
    for (let i = 0; i < nmbr; i++) {
        console.log(a);
        a = a + b;
        b = a - b; 
    }  
    return "end"
}
console.log(fibonacci(50));
*/


/* 
function fibonacci(n: number) {
    let tab :number[] = [1, 1]
    let string: string = ''
    for (let i = 0; i < n; i++) {
        tab.push(tab[i] + tab[i + 1])
        string = string + tab[i] + ","
    }
    return string
}/*


function compareFibo(nmbr: number){
    let x :number = 1 
    for (let i = 1; nmbr <= i; i++) {
        x ++
        let array :string  = fibonacci(x);
        let array1 :string[] = array.split(",")
        
        if (nmbr == parseInt(array1[i])){
            return i
        }
    }
    
}
console.log(compareFibo(3)); 

*/
/**********exo 14 
function split(str:string , spString:string) {
    let array :string[] = [];
    let word :string =""
    for (let i = 0; i < str.length; i++) {
        word += str[i]
        if (str[i] == spString){
            if (str[i] != "") {
                array.push(word)
            }
            word = ""
        }
    }
    array.push(word)
    return array
}

console.log(split("coder la fonction qui permettra de diviser une chaine de caractère"," "));
*/


