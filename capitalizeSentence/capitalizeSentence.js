//input user
let sentence = (prompt('Enter a sentence  : ')); 
//split string into an array of strings
const array = sentence.split(" ");
//looping array and capitalize the first letter.
for (let i=0; i< array.length; i++){
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
}
//Join of the array back into a string
const sentence2 = array.join(" ");
console.log(sentence2);