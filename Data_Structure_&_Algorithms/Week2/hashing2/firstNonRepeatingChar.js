// Find the First Non-Repeating Character
// Implement a function that takes a string as input and returns the first 
// non-repeating character in the string.

console.log(firstNonRepeating("abcdabcde")); // e
console.log(firstNonRepeating("aabbccd"));  // d

function firstNonRepeating(str) {
    let ans = new Array;
    let myMap = new Map;
    let len = str.length;

    for(let i=0; i<len; i++){
        if(myMap.has(str[i])){
            ans.splice(ans.indexOf(str[i]), 1 );
        }
        else{
            myMap.set(str[i], 1);
            ans.push(str[i]);
        }
    }
    return ans.length>0 ? ans[0] : "No such element";
}

//TC is O(n)