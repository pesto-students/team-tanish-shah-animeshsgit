console.log(checkEvenOrOdd(10)) //Even
console.log(checkEvenOrOdd(11)) //Odd

function checkEvenOrOdd(num){
    if(num%2 == 0){
        return "Even"
    }
    else return "Odd"
}