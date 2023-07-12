console.log(duplicate("5 2 3 2 5 1"))

function duplicate(value){
    let str = value.split(' ');
    console.log(str);
    const occurance = new Map;
    for(let i=0; i<str.length; i++){
        if(occurance.has(str[i])){
            occurance.set(str[i], occurance.get(str[i])+1);
        }
        else{
            occurance.set(str[i], 1)
        }
    }
    let non_duplicate = []
    for(const [key,value] of occurance){
        if(occurance.get(key) == 1) {
            non_duplicate.push(key)
        }
    }
    console.log(occurance);
     return non_duplicate;
}