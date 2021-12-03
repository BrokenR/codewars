function letterTO(text){
    const res = []
    const alph = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i <text.length ; i++) {
        text = text.replace(/[^a-zа-яё]/gi, '').toLowerCase()
        if(text!='') {
            const letter = alph.indexOf(text[i])+1
            res.push(letter)
        }else{
            res===''
        }

    }
    return res.join(' ')
}

console.log(letterTO('The sunset sets at twelve o\' clock.'))

//========================================================
function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map( (c) => c.charCodeAt() - 64)
        .join(' ');
}