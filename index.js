// Problem 1: Reverse a String

function reverseStr(str){
let reverse = '';
for(let i = str.length-1;i>=0;i--){
    reverse=reverse+str[i]
}
 return reverse
}
console.log(reverseStr('hello'));

// Problem 2: Count Vowels in a String


