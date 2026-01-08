// Problem 1: Reverse a String

function reverseStr(str){
let reverse = '';
for(let i = str.length-1;i>=0;i--){
    reverse=reverse+str[i]
}
 return reverse
}
console.log(reverseStr('hello')); //olleh

// Problem 2: Count Vowels in a String

function countVowels(str){
let count = 0;
let vowel = 'aeiou';
for(let i =0;i<str.length;i++){
    if(vowel.includes(str[i].toLowerCase())){
        count++
    }
}
return count
}
console.log(countVowels('programming')); //3

// Problem 3: Check for Palindrome

function isPalindrome(str){
    let reverse = '';
    for(let i = str.length-1;i>=0;i--){
        reverse=reverse+str[i]
    }
    return str === reverse
}
console.log(isPalindrome('madam'));//true
console.log(isPalindrome('hello'));//false


