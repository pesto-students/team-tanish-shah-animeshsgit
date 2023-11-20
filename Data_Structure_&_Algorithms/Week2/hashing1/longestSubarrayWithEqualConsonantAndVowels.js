// Longest Subarray with Equal Number of Vowels and Consonants
// Write a function that takes an array of characters as input and
// finds the length of the longest subarray in the array that contains an equal number of 
// vowels and consonants. The vowels are defined as 'a', 'e', 'i', 'o', and 'u' 
// (both lowercase and uppercase).

console.log(longestSubArray("abcdeiouiop")); // 6
console.log(longestSubArray("aeiouAEIOU")); // 0

function longestSubArray(str) {
    let len = str.length;

    let holder =new Array(len);
    let maxLen = 0;
    let currentSum = 0;
    let myMap = new Map;

    for(let i=0; i<len; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U'){
            holder[i] = 1;
        }
        else holder[i] = -1;
    }

    for(let i=0; i<len; i++){
        currentSum += holder[i];

        if(currentSum == 0){
            maxLen = Math.max(maxLen, i+1);
        }

        if(myMap.has(currentSum)){
            maxLen = Math.max(maxLen, i-myMap.get(currentSum));
        }
        else{
            myMap.set(currentSum, i);
        }
    }
    return maxLen;
}

// TC is O(n)