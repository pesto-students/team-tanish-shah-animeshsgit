console.log(subarray([5, 2, 3, -2, 4, 5])); //30
console.log(subarray([4, -1, -2, -3, -4])); //4

function subarray(arr){
    let maxProduct = 1;
    let currentProduct = 1;

    for(let i =0; i<arr.length; i++){
        currentProduct = 1;
        for(let j=i; j<arr.length; j++){
            currentProduct*=arr[j];
            if(currentProduct<1){
                currentProduct = 1;
            }
            else if(currentProduct>maxProduct){
                maxProduct = currentProduct;
            }
        }
    }

    return maxProduct;
}