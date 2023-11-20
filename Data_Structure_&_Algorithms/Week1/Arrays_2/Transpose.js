console.log(transpose([1, 2, 3, 4], 2, 2)); //[ [ 1, 3 ], [ 2, 4 ] ]
console.log(transpose([1, 2, 3, 4, 5, 6, 7, 8], 2, 4)); //[ [ 1, 5 ], [ 2, 6 ], [ 3, 7 ], [ 4, 8 ] ]

function transpose(arr, row, col) {
    let arrT = [];
    let k = 0;
    for (let i = 0; i < col; i++) {
        arrT[i] = new Array(row);
    }

    for (i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            arrT[j][i] = arr[k];
            k++;
        }
    }

    return arrT;
}