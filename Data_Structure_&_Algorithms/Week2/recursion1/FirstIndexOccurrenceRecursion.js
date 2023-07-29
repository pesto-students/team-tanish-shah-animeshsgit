// First Index of Occurrence using Recursion
// Given an array of integers and a target value, 
// write a recursive function to find the first index of occurrence of the
//  target value in the array.

const inputArray = [1, 2, 3, 4, 5];
const target = 5;
console.log(indexOccurrence(inputArray, 0) ); //4

function indexOccurrence(arr, n){
    if(arr[n] === target){ return n ;}
    if(n === arr.length){return -1 ;}
    return indexOccurrence(arr, n+1);
}

// TC is O(n)