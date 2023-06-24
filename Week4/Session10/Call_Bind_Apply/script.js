"use strict";

class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }
}

class ScientificCalculator extends Calculator {
    square(num){
        return num*num;
    }

    cube(num){
        return num*num*num;
    }

    power(num1, num2){
        return Math.pow(num2, num1);
    }
}

//const instance1 = new ScientificCalculator();

// Using the "call" method
const sum = Calculator.prototype.add.call(ScientificCalculator, 10, 5);
console.log(sum); // Output: 15

// Using the "apply" method
const difference = Calculator.prototype.subtract.apply(ScientificCalculator, [10, 5]);
console.log(difference); // Output: 5

// Using the "bind" method
const multiplyByTwo = Calculator.prototype.multiply.bind(ScientificCalculator, 2);

const powerOfThree  = ScientificCalculator.prototype.power.bind(ScientificCalculator, 3)

const result = multiplyByTwo(5);
console.log(result); // Output: 10

const resultPower = powerOfThree(2);
console.log(resultPower); //Output: 8