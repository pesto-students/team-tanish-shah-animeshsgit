// Put your solution here
"use strict";

function divideArray(nums) {
    let even = [];
    let odd = [];
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] % 2) == 0) {
            even.push(nums[i]);
        }
        else {
            odd.push(nums[i]);
        }
    }
    //Printing even numbers
    console.log("Even numbers:");
    let sortEven = () => {
        even.sort();
        return even.toString();
    }
    console.log(even.length ? sortEven() : "None")

    //Printing odd numbers
    console.log("Odd numbers:");
    let sortOdd = () => {
        odd.sort();
        return odd.toString();
    }
    console.log(odd.length ? sortOdd() : "None")
}

//Demo Output

divideArray([22, 14, 8]);
/* 
Even numbers:
script.js:21 14,22,8
script.js:24 Odd numbers:
script.js:29 None 
*/
console.log("RUNNING AGAIN")

divideArray([1, 5, 13]);
/* 
Even numbers:
script.js:21 None
script.js:24 Odd numbers:
script.js:29 1,13,5 
*/
console.log("RUNNING AGAIN")

divideArray([1, 5, 3, 2, 4, 8]);
/*
Even numbers:
script.js:21 2,4,8
script.js:24 Odd numbers:
script.js:29 1,3,5
*/