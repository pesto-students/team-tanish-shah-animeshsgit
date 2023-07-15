console.log(myFunction("5 2 9 1 7")); //10
console.log(myFunction("-10 0 100 -50 20")); //50

function myFunction(data) {
    let dataArray = data.split(" ");
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE
    for(let i of dataArray){
        if(i>max){
            max = parseInt(i);
        }
        if(i<min){
            min = parseInt(i);
        }
    }
    return max+min;
}