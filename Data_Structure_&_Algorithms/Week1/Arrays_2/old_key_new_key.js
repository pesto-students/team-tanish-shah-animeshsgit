console.log(newKey([1,2,3,2,4,2,5], 2, 6)); //[1, 6, 3, 6, 4, 6, 5]
console.log(newKey([5,5,5,5], 5, 2)); //[ 2, 2, 2, 2 ]

function newKey(arr, oldK, newK){
    for (let i=0; i<arr.length; i++){
        if(arr[i] == oldK){
            arr[i] = newK;
        }
    }

    return arr;
}