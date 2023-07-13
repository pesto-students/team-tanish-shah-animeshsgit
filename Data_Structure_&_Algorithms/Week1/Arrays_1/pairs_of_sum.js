console.log(pairSum([2,4,6,8,10],12)); //[ [ 2, 10 ], [ 4, 8 ] ]
console.log(pairSum([1,1,1,1,1],2)); //[ [ 1, 1 ], [ 1, 1 ] ]

function pairSum(arr, value){
    let myArr = arr;
    let ans = [];

    for(let i=0; i<myArr.length/2; i++){
        let diff = value - myArr[i];
        if(myArr.includes(diff) && (myArr.indexOf(diff) != i)){
            ans.push([myArr[i], diff])
        }
    }

    return ans;
}