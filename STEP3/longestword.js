function findLongestWord(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > max) max = arr[i].length
    }
    return max
}

console.log(
    findLongestWord(["hello", 'supercalifragilisticespealidocious']),
    findLongestWord(["hello", 'an']),
    findLongestWord(["hello", 'Superman']),
    findLongestWord(["hello", 'cometolife'])


)

// O(n)