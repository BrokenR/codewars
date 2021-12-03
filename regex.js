function order(words){

    return words.split(' ').sort(function(a, b){
        console.log(a, b)
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

console.log(order('h3llo m1y fri2nd'))