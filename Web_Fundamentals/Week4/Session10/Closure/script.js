"use strict";

//Closure function
function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

//Imstances for fn
let firstCounter = counter();
let secondCounter = counter();

//Data structure to store the output of instances
let firstValue = [];

firstValue.push(firstCounter());
firstValue.push(firstCounter());
firstValue.push(firstCounter());
firstValue.push(firstCounter());
firstValue.push(firstCounter());

//Data structure to store the output of instances
let secondValue = [];

secondValue.push(secondCounter());
secondValue.push(secondCounter());
secondValue.push(secondCounter());

console.log("First " + firstValue.toString()); //OUTPUT: First 1,2,3,4,5
console.log("Second " + secondValue.toString()); //OUTPUT: Second 1,2,3