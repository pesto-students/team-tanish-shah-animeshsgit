// Maximum Points on a Line

// Given a list of 2D points, write a function to find the 
// maximum number of points that lie on the same line using hashing.

//console.log(maxPoint( [[1, 1], [2, 2], [3, 3], [4, 5], [5, 6], [6, 7]] )) // 3
//console.log(maxPoint(  [[1, 1], [2, 2], [3, 3]] )) // 3

function maxPoint(arr){
    let maxPoint =2;
    let len = arr.length;
    for(let i=0; i<len; i++){
        for(let j = i+1; j<len; j++){
            let currentMax = 2;
            for(let k = 0; k<len; k++){
                if(k != i && k !=j){
                    if( ( (arr[j][1] - arr[i][1]) * (arr[i][0] - arr[k][0]) ) ==  ( (arr[i][1] - arr[k][1]) * (arr[j][0] - arr[i][0]) ) ){
                        currentMax++;
                    }
                }
            }
            maxPoint = Math.max(maxPoint, currentMax);
        }
    }
    return maxPoint;
}

// TC is O(n3)

// Approach 2

console.log(maxPoint2( [[1, 1], [2, 2], [3, 3], [4, 5], [5, 6], [6, 7]] )) // 3
//console.log(maxPoint2(  [[1, 1], [2, 2], [3, 3]] )) // 3

function maxPoint2(arr){
    let maxPoint =2;
    let len = arr.length;
    let map = new Map;
    for(let i=0; i<len; i++){
        for(let j = i+1; j<len; j++){
            let currentMax = 2;
            for(let k = 0; k<len; k++){
                if(k != i && k !=j){
                    if( ( (arr[j][1] - arr[i][1]) * (arr[i][0] - arr[k][0]) ) ==  ( (arr[i][1] - arr[k][1]) * (arr[j][0] - arr[i][0]) ) ){
                        currentMax++;
                    }
                }
            }
            maxPoint = Math.max(maxPoint, currentMax);
        }
    }
    return maxPoint;
}