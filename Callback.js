function One(callback){
    return callback ? callback(1):1
}
function Two(callback){
    return callback ? callback(2):2
}
function Three(callback){
    return callback ? callback(3):3
}
function Four(callback){
    return callback ? callback(4):4
}
function Five(callback){
    return callback ? callback(5):5
}
function Six(callback){
    return callback ? callback(6):6
}
function Seven(callback){
    return callback ? callback(7):7
}
function Eight(callback){
    return callback ? callback(8):8
}
function Nine(callback){
    return callback ? callback(9):9
}
function Plus(a){
    return (b)=>a+b
}
function Minus(a){
    return(b)=>a-b
}
function Divide(a){
    return(b)=>b/a
}
function Multi(a){
    return(b)=>a*b
}

console.log(Three(Divide(Three())))