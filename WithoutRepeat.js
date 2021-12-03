const arr = [1,1,1,2,3,2,4,5,4,6]
function WithoutRepeat(arr){
    const result = []
    const dictionary = {}
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        dictionary[item] = dictionary[item] ? dictionary[item]+1 :1
    }
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (dictionary[item]===1){
            result.push(item)
        }
    }return result
}

console.log(WithoutRepeat(arr))