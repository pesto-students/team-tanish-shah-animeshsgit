console.log(checkProductLCM_HCF(6, 8)); //48
console.log(checkProductLCM_HCF(15, 25)); //375

function checkProductLCM_HCF(num, num1){
    let factor = 1;
    let hcf = calculateHCF(num, num1); 
    function calculateHCF(num, num1) {
        for(let i=0; i<=num || i<=num1; i++){
            if((num%i == 0) && (num1%i == 0)){
                factor = i;
            }
        }
        return factor;
    }

    let lcm = ((num*num1)/hcf);
    return hcf*lcm;
}