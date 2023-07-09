// Your solution goes here 
"use strict";

let flag = true;
let randomNum = Math.floor(Math.random() * 100);
playGuessingGame(10);
var input = "";
function playGuessingGame(numToGuess, totalGuesses = 10) {

    if (flag) {
        input = userInput("Enter a number between 1 and 100");
        flag = false;
    }
    if (numToGuess == input) {
        alert(`Correct guess in attempt: ${11 - totalGuesses}`);
    }
    else {
        totalGuesses--;
        again(totalGuesses, input, numToGuess);
    }

}

function again(totalGuesses, num, numToGuess) {
    if (totalGuesses) {
        console.log(totalGuesses);
        input = promptCall(num, numToGuess, totalGuesses);
        playGuessingGame(numToGuess, totalGuesses);
    }
    else if (!totalGuesses) {
        alert("Sorry limit exceeds");
    }
}

function userInput(statement) {
    let input = prompt(statement);
    if (input == NaN || input == "") {
        input = prompt("Please enter a number.");
    }
    if (input == null) {
        alert("0");
        return;
    }
    return input;
}

function promptCall(num, numToGuess, totalGuesses) {
    if (num < numToGuess) {
        let PStatement = `${num}is too small. Guess a larger number. ${totalGuesses} guesse left`;
        let input = userInput(PStatement);
        return input;
    }
    else if (num > numToGuess) {
        let PStatement = `${num}is too large. Guess a smaller number. ${totalGuesses} guesse left`;
        let input = userInput(PStatement);
        return input;
    }
}