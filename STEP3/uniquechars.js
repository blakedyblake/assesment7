function hasUniqueChars(str){
    let arr = str.split("").map(e=>e.toLowerCase());
    let obj = {

    }
    for(let i = 0; i <arr.length; i++){
        if(obj[arr[i]]) return false;
        else {
            obj[arr[i]] = 1
        }
    }
    return true;
}

console.log(
    hasUniqueChars('Monday'),
    hasUniqueChars('moo'),
    hasUniqueChars('asjdkfh'),
    hasUniqueChars('asdfghjkll')
)