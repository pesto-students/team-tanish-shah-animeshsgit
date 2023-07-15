console.log(checkLeap(2000)); //Yes
console.log(checkLeap(1900)); //Yes

function checkLeap(year) {
    if( (year%4 == 0) && (year%100 != 0) || (year%400 == 0) ){
        return "Yes"
    }
    else
    return "No"
}