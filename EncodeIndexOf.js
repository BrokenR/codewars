function Encode(str) {
    let unique = ''
    const word = str.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
            unique += '('
        } else
            unique += ')'
    }
    return unique
}
console.log(Encode('recede'))