// Longest Consecutive Subsequence
// Write a function that takes an array of integers as input and finds the length of the longest consecutive subsequence in the array. A consecutive subsequence is a sequence of numbers that appear consecutively in the array (without gaps).

console.log(checkSequence([100, 4, 200, 1, 3, 2])); //output 4
console.log(checkSequence([10, 5, 7, 3, 4, 8, 9])); //output 4

function checkSequence(arr){
    let mySet = new Set(arr); //O(n)
    let longestStreak = 0;

    for(let num of arr){ // O(n)
        let currentNum = num;
        let currentStreak = 1;

        if(!mySet.has(currentNum-1)){
            while(mySet.has(currentNum+1)){ //O(n)
                currentNum+=1;
                currentStreak+=1;
            }
        }
        longestStreak = Math.max(longestStreak, currentStreak);
    }
    return longestStreak;
}

// TC is O(3n) which is O(n)