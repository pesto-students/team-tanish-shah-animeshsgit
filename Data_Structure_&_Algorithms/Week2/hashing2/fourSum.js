// Four Sum
// Given an array of integers and a target sum, find all unique quadruplets 
// in the array that sum up to the target using hashing.

console.log(fourSum([1,0,-1,0,-2,2], 0)); //[ [ 1, 0, -1, 0 ], [ 1, -1, -2, 2 ], [ 0, 0, -2, 2 ] ]
console.log(fourSum([ 2,2,2,2,2], 8)); //[ [ 2, 2, 2, 2 ] ]

function fourSum(arr, total) {
    let len = arr.length;
    let ans = new Array;
    let seen = new Set();
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                for (let l = k + 1; l < len; l++) {
                    let key = arr[i] + "," + arr[j] + "," + arr[k] + "," + arr[l];
                    if (arr[i] + arr[j] + arr[k] + arr[l] == total && !seen.has(key)) {
                        ans.push([arr[i], arr[j], arr[k], arr[l]]);
                        seen.add(key);
                    }
                }
            }
        }
    }
    return ans;
}

// Tc is O(n4)

//Arrroach 2 Optimised

console.log(fourSum2([1, 0, -1, 0, -2, 2], 0)); // [ [ -1, -2, 1, 2 ], [ -1, 0, 0, 1 ], [ -2, 0, 0, 2 ] ]
console.log(fourSum2([ 2,2,2,2,2], 8)); //[ [ 2, 2, 2, 2 ] ]

function fourSum2(ar, total) {
    let arr = ar.sort();
    let len = arr.length;
    let ans = new Array;
    let seen = new Set();
    
    for (let i = 0; i < len; i++) {
        if (i > 0 && arr[i] == arr[i - 1]) continue
        for (let j = i + 1; j < len; j++) {
            if (j > i + 1 && arr[j] == arr[j - 1]) continue
            let k = j + 1;
            let l = len - 1;

            while (k<l) {
                let sum = arr[i] + arr[j] + arr[k] + arr[l];
                let key = arr[i] + "," + arr[j] + "," + arr[k] + "," + arr[l];
                if (sum == total && !seen.has(key) ) {
                    ans.push([arr[i], arr[j], arr[k], arr[l]])
                    seen.add(key);
                    k++;
                    l--;
                }
                else if(sum < total) k++;
                else if(sum > total) l--;
            }
        }
    }
    return ans;
}

// TC is O(n2)