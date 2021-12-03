function iterFibonachi(n){
    if (n<=0){
        return 0
    }
    if (n<=2){
        return 1
    }
    let prev = 1
    let result = 1
    for (let i = 0; i <n-2 ; i++) {
        let tmp = result        //1 2 3 5 8
        result+=prev        //2 3 5 8 13
        prev = tmp      //1 2 3 5 8

    }return result
}
console.log(iterFibonachi(7))
