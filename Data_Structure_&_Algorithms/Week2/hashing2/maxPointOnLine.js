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
console.log(maxPoint2(  [[1, 1], [2, 2], [3, 3]] )) // 3

function maxPoint2(ps){
        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    
        const getSlopeKey = ([x1, y1], [x2, y2]) => {
            const [dx, dy] = [x1 - x2, y1 - y2];
            const g = gcd(dx, dy);
            return `${dy / g}, ${dx / g}`;
        };
    
        let max = 1;
        for (let i = 0; i < ps.length; i++) {
            const o = {};
            for (let j = i + 1; j < ps.length; j++) {
                const key = getSlopeKey(ps[i], ps[j]);
                o[key] = (o[key] || 0) + 1;
            }
            const count = Math.max(...Object.values(o)) + 1;
            max = Math.max(count, max);
        }
        return max;
}

// TC is 