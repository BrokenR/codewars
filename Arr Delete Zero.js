const array = [9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]
function Delete(){
    for (let i = 0; i <=array.length ;i++){
        for (let j = 0; j<i;j++)
            if (array[i]===0){
                array.splice(i, 1);
                array.push(0)
                if(array[j]===0){
                    array.splice(j, 1);
                    array.push(0)
                }
            }

    }
    return array


}
console.log(Delete(array))