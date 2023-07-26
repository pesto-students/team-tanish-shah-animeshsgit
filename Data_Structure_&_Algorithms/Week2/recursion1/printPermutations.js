// Print All Permutations
// Write a recursive function to print all permutations of a given string.

let string = "abc";
stringPermutations(string, "");

function stringPermutations(str, n) {
    if (str.length === 0) {
        console.log(n);
        return;
    }
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        let lpart = str.substring(0, i);
        let rpart = str.substring(i + 1);
        let remaining = lpart + rpart;
        stringPermutations(remaining, n + ch);
    }
}
