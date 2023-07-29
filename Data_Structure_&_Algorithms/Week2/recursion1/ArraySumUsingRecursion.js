// Array Sum using Recursion
// Write a recursive function to calculate the sum of all elements in an array.

console.log(sumRecursion([1, 2, 3, 4, 5])); //15
console.log(sumRecursion([0, 0, 0, 0, 0])); //0

function sumRecursion(arr){
    let n = arr.length;

    function recur(arr, n){
        if(n == 0){ return 0 };

        return recur(arr, n-1) + arr[n-1];
    }

    return recur(arr, n);
}

// TC is O(n)