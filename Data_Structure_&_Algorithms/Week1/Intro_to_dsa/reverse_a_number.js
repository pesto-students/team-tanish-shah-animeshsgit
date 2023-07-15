console.log(isPalindrome(12345)) //54321
console.log(isPalindrome(100)) //1

function isPalindrome(number){
    let reversed = 0;
    let num = number;

    while(num>0){
        reversed*=10;
        let i = num%10;
        num = Math.trunc(num/10);
        reversed+=i;
    }
    return reversed;
}