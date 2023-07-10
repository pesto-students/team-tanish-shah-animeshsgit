console.log(isPalindrome(123321)) //Yes
console.log(isPalindrome(12345321)) //no

function isPalindrome(number){
    let reversed = 0;
    let num = number;

    while(num>0){
        reversed*=10;
        let i = num%10;
        num = Math.trunc(num/10);
        reversed+=i;
    }

    if(number == reversed)
    return "Yes";

    else
    return "No";
}