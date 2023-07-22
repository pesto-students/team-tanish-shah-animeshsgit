// Longest Subarray with Equal Number of 0s and 1s
// Write a function that takes an array of 0s and 1s as input and 
// finds the length of the longest subarray that contains an equal number of 0s and 1s.

console.log(longestArray([0, 1, 0, 1, 1, 0, 0])); //6
console.log(longestArray([1, 0, 1, 0, 1, 0, 1])); //6

//Approach 1
function longestArray(arr) {
    let len = arr.length;
    let zeroCount = 0;
    let oneCount = 0;
    let maxLen = 0;

     for(let i = 0; i<len; i++){
        if(arr[i] == 0){
            zeroCount++;
        }
        else oneCount++;

        if(zeroCount == oneCount){
            maxLen = Math.max(maxLen, i);
        }
     }
     maxLen = (maxLen > 0)? maxLen+=1 : maxLen;
     return maxLen;
}

// TC is O(n)

//Approach 2
console.log(longestArray2([0, 1, 0, 1, 1, 0, 0])); //6
console.log(longestArray2([1, 0, 1, 0, 1, 0, 1])); //6

function longestArray2(arr) {
    let sum =0;
    let myMap = new Map;
    let subLen = 0;

    for(let i =0; i<arr.length; i++){
        if(arr[i] == 0){
            sum += -1;
        }
        else if (arr[i] == 1){
            sum += 1;
        }

        if(myMap.has(sum)){
            let at = myMap.get(sum);
            let diff = i-at;
            subLen =Math.max(subLen, diff);
        }
        else{
            myMap.set(sum,i);
        }
    }
    return subLen;
}
// TC is O(n)