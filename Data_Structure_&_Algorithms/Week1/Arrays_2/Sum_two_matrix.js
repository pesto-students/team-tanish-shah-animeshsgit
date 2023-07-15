console.log(doSum([[1,2,3], [4,5,6]], [[7,8,9], [10,11,12]])); //[ [ 8, 10, 12 ], [ 14, 16, 18 ] ]
console.log(doSum([[1,2], [3,4]], [[5,6], [7,8]])); //[ [ 6, 8 ], [ 10, 12 ] ]

function doSum(arr1, arr2) {
    let ans = [[],[]];

    for(let i=0; i<arr1.length; i++){
        for(let j =0; j<arr1[0].length; j++){
            ans[i][j] = arr1[i][j] + arr2[i][j];
        }
    }

    return ans;
}