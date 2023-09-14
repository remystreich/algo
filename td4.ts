import promptSync from 'prompt-sync';
const prompt = promptSync();

/***********exo 2 
let nmbrs :number[] = [2 , 2, 2 , 2];
let sum :number = 0;
let product :number =1;
let moyen :number =0;

for (let i = 0; i < nmbrs.length; i++) {
    sum += nmbrs[i];
    product *= nmbrs[i];
    moyen = sum / nmbrs.length;
    
}
console.log(sum , product , moyen);

*/
/**********exo2 v2 
let nmbrs :number[] = [2 , 2, 2 , 2];
let sum:number = nmbrs.reduce((a,b) => a + b);
let product:number = nmbrs.reduce((a,b)=> a*b);
let moyen = sum / nmbrs.length;
console.log(sum , product , moyen);

*/

/*********exo 3
let nmbrs: number[] = [2, 3, 4, 2];
let result: number = 0;
let number: number = parseInt(prompt("entrer nombre"))
for (let i = 0; i < nmbrs.length; i++) {

    if (nmbrs[i] == number) {
        result++
    }
}
console.log(result);

 */

/*******exo5 
let nmbrs: number[] = [2, 3, 4, 5];
nmbrs.splice(0 , 1);
console.log(nmbrs);

*/

/***************exo7

let array1 :number[] = [4, 2, 1, 9, 3, 5];
let array2 :number[] = [2, 5, 8, 1, 6, 7];
let array3 :number [] = [];

for (let i = 0; i < array1.length; i++) {
    let result = array1[i] + array2[i]
    array3[i] = result
}


console.log(array3);
 */



/**********exo 8
let array1 :number[] = [2, 4, 5];
let array2 :number[] = [3, 1];
let result :number =0;

for (let i = 0; i < array1.length ; i++) {
       
    for (let j = 0; j < array2.length ; j++) {
        result += (array1[i] * array2[j])
        
    }
}

console.log(result);
*/

/*************************** exo 9
let notes :number [] = [8, 5, 4, 7, 6]
let biggest :number = 0;
let mid :number = 0;
let notesSup :number = 0;

for (let i = 0; i < notes.length; i++) {
    mid+= notes[i]
    if (notes[i] > biggest) {
        biggest = notes[i];
        
    } 
    
}

mid = mid / notes.length;

for (let i = 0; i < notes.length; i++) {
    if (notes[i] > mid){
        notesSup++
    }
    
}
console.log(biggest , (notes.indexOf(biggest)) , notesSup );

*/

let notes :number [] = [8, 5, 4, 7, 6]
let biggest :number = 0;
let mid :number = 0;


for (let i = 0; i < notes.length; i++) {
    mid+= notes[i]
    if (notes[i] > biggest) {
        biggest = notes[i];
        
    } 
    
}

mid = mid / notes.length;

let notesSup :number[] = notes.filter(x=> x> mid)

console.log(biggest , (notes.indexOf(biggest)) , notesSup );


