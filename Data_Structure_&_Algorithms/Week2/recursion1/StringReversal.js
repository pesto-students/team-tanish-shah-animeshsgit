// String Reversal using Recursion
// Write a recursive function to reverse a given string.

let string = "Hello"
let len = string.length;
console.log(stringReversal(string, 0) ); //

function stringReversal(str, n){
    if(n == len-1){ return str[n] }
    return stringReversal(str, n+1) + str[n];
}

// TC is O(n)