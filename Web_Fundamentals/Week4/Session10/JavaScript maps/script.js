
var myMap = new Map();
calcWordFrequencies();

function calcWordFrequencies() {
    let input = prompt("Enter the statement");
    //let input = ("hey hi Mark hi mark");
    let inputArray = input.split(" ");
    inputArray.map(myFunction);
    //Printing the map key values
    console.log([...myMap.entries()]);
}

//Logic behind calculation of word
function myFunction(word) {
    //If map contain the word it will update the occurance by one
    if (myMap.has(word)) {
        let myValue = myMap.get(word);
        myValue++;
        myMap.set(word, myValue);
    }
    //If map doesn't contain the word it will add a new entry
    else if (!myMap.has(word)) {
        let myValue = 1;
        myMap.set(word, myValue);
    }
}


/*
the console output is:
hey 1
hi 2
Mark 1
mark 1
*/