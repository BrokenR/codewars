const arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]
function Odd(arr){
    const result = []
    const dictionary = {}
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        dictionary[item] = dictionary[item]? dictionary[item]+1:1
    }
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (dictionary[item]%2==1){
            return item
        }
    }return result
}

console.log(Odd(arr))