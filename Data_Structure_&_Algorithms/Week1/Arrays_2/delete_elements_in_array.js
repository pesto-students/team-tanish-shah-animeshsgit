console.log(deleteElements([1,2,3,4,5,6,7,8,9])); // [ 1, 5, 7 ]
console.log(deleteElements([ 9,12,15,18,21])); // []


function deleteElements(arr){
    return arr.filter( (value)=>{
        if(!(value%2 == 0 || value%3==0)){
            return value;
        }
    } )
}