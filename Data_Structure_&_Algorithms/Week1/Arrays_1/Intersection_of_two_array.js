console.log(Intersection([1,2,3,4,5], [4,5,6,7,8])); //OUTPUT: [ 4, 5 ]
console.log(Intersection([1,2,3,4,5], [5,4,3,2,1])); //OUTPUT: [ 1, 2, 3, 4, 5 ]

function Intersection(arr1, arr2){
    let commonElements = []

    for(const i of arr1){
        if(arr2.includes(i)){
            commonElements.push(i);
        }
    }

    return commonElements;
}