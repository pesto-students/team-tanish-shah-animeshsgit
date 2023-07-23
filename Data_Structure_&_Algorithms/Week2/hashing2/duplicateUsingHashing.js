// Check for Duplicates using Hashing
// Implement a function that takes an array of integers as input and checks if there are any duplicate 
// elements using hashing.

console.log(checkDuplicate([1, 2, 3, 4, 5, 1])); // 1
console.log(checkDuplicate([10, 20, 30, 40, 50])); // No duplicate elements

function checkDuplicate(arr) {
    let len = arr.length;
    let myMap = new Map;
    let ans = new Array;

    for(let i =0; i<len; i++){
        if(myMap.has(arr[i])){
            ans.push(arr[i]);
            myMap.set(arr[i], myMap.get(arr[i])+1 );
        }
        else{
            myMap.set(arr[i], 1);
        }
    }
    return final= ans.length>0 ? ans : "No duplicate elements" ;
}

// TC is O(n)