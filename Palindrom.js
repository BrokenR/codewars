// function  Palindrom (word){
//     word = word.toLowerCase()
//     for (let i = 0; i < word.length/2; i++) {
//         if (word[i]!==word[word.length-i-1]){
//             return false
//         }
//     }
//     return true
// }
// console.log(Palindrom('aabbsa'))
function Palindrom(word){
    word=word.toLowerCase()
    return word===word.split('').reverse().join('')
}console.log(Palindrom('aabbaa'))