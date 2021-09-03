let arr1 = [1]
let arr2 = [1,3]
let arr3 = [1,3,-2]
let arr4 = [1,3,-2, 2]

function addToZero(arr){
    if(arr.length < 2) return false
    let obj = {

    }
    for(let i = 0; i<arr.length; i++){
        obj[arr[i]] = 1
    }
    for(let i in obj){
        if(obj[-i]) return true
    }
    return false
}
console.log(
    addToZero(arr1),
    addToZero(arr2),
    addToZero(arr3),
    addToZero(arr4)
)
