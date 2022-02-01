//
// /function CollectingNames (name, surname){
// /    const message = 'Zdarova ' + name+' '+surname
// /    return function (){
// /        console.log(message)
// /    }
// /}
// /const names = CollectingNames('B4zenga', 'Marjello')
// /console.log(names())
// const a = 'B4zenga Marjello'
// const hello = a=> `Hello, ${a}`
// console.log(hello(a))
// const s = a.split(' ')
// const g = 'Hello '+s[0]+' '+s[1]
// console.log(g)
// const lists= [
//     'B4zenga',
//     'Marjello',
//     'Beast'
// ]
// lists.map((list)=>{
//     console.log('Hello'+list[0])
// })



// const array = [9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]
// function Delete(){
//     for (let i = 0; i <=array.length ;i++){
//         for (let j = 0; j<i;j++)
//         if (array[i]===0){
//             array.splice(i, 1);
//             array.push(0)
//             if(array[j]===0){
//                 array.splice(j, 1);
//                 array.push(0)
//             }
//         }
//
//     }
//     return array
//
//
// }
// console.log(Delete(array))
// function Encode(str) {
//     let unique = ''
//     const word = str.toLowerCase()
//     for (let i = 0; i < word.length; i++) {
//         if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
//             unique += '('
//         } else
//             unique += ')'
//     }
//     return unique
// }
// const word = 'tupaya'
// console.log(word.lastIndexOf('a',5))
//


// function iterFibonachi(n){
//     if (n<=0){
//         return 0
//     }
//     if (n<=2){
//         return 1
//     }
//     let prev = 1
//     let result = 1
//     for (let i = 0; i <n-2 ; i++) {
//         let tmp = result        //1 2 3 5 8
//         result+=prev        //2 3 5 8 13
//         prev = tmp      //1 2 3 5 8
//
//     }return result
// }
// console.log(iterFibonachi(7))

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

// function One(callback){
//     return callback ? callback(1):1
// }
// function Two(callback){
//     return callback ? callback(2):2
// }
// function Three(callback){
//     return callback ? callback(3):3
// }
// function Four(callback){
//     return callback ? callback(4):4
// }
// function Five(callback){
//     return callback ? callback(5):5
// }
// function Six(callback){
//     return callback ? callback(6):6
// }
// function Seven(callback){
//     return callback ? callback(7):7
// }
// function Eight(callback){
//     return callback ? callback(8):8
// }
// function Nine(callback){
//     return callback ? callback(9):9
// }
// function Plus(a){
//     return (b)=>a+b
// }
// function Minus(a){
//     return(b)=>a-b
// }
// function Divide(a){
//     return(b)=>b/a
// }
// function Multi(a){
//     return(b)=>a*b
// }
//
// console.log(Three(Divide(Three())))

// const concerts = {
//     'Москва': new Date('2020-04-01'),
//     'Казань': new Date('2021-07-02'),
//     'Владивосток': new Date('2020-04-21'),
//     'Калининград': new Date('2021-07-15'),
//     'Омск': new Date('2020-04-18'),
//     'Питер': new Date('2021-07-10'),
// }
//
// function concertsToArray(concerts){
//     return Object.keys(concerts)
//         .filter(city=>concerts[city]>new Date('2021-05-01'))
//         .sort((a,b)=>concerts[a]-concerts[b]
//     )
// }
//
// console.log(concertsToArray(concerts))

// const arr = [1,1,1,2,3,2,4,5,4,6]
// function WithoutRepeat(arr){
//     const result = []
//     const dictionary = {}
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i]
//         dictionary[item] = dictionary[item] ? dictionary[item]+1 :1
//     }
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i]
//         if (dictionary[item]===1){
//             result.push(item)
//         }
//     }return result
// }
//
// console.log(WithoutRepeat(arr))

// const arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]
// // function Odd(arr){
// //     const result = []
// //     const dictionary = {}
// //     for (let i = 0; i < arr.length; i++) {
// //         const item = arr[i]
// //         dictionary[item] = dictionary[item]? dictionary[item]+1:1
// //     }
// //     for (let i = 0; i < arr.length; i++) {
// //         const item = arr[i]
// //         if (dictionary[item]%2==1){
// //             return item
// //         }
// //     }return result
// // }
//
// // console.log(Odd(arr))
// function findOdd(arr) {
//     return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }
//
// console.log(arr)



// const rot13 = (message) => {
//     const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
//     return message.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
// }
// console.log(rot13('hello'))


// function letterTO(text){
//     const res = []
//     const alph = 'abcdefghijklmnopqrstuvwxyz'
//     for (let i = 0; i <text.length ; i++) {
//         text = text.replace(/[^a-zа-яё]/gi, '').toLowerCase()
//         if(text!='') {
//             const letter = alph.indexOf(text[i])+1
//             res.push(letter)
//         }else{
//             res===''
//         }
//
//     }
//     return res.join(' ')
// }
//
// console.log(letterTO('The sunset sets at twelve o\' clock.'))
// function solution(str,ending){
//
//     if(str.startsWith(ending,str.length-ending.length)==ending){
//         return true
//     }else{
//         return false
//     }
// }
//
// console.log(solution('abcdeede','ede'))
// const a = 'abcdeede'
// const end = 'ede'
// console.log(a.startsWith(end,a.length-end.length))
// console.log(a.length, end.length)

// const list = [1,2,'a','b'];
// const res = list.filter(l=>typeof l==='number')
// console.log(res)
//
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//
// const result = words.filter(word => word.length > 6);
// console.log(result)
//
// const orig = 'WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'
// const res = orig.replace(/WUB/g, ' ').replace(orig,' ')
// console.log(res)

// function longestConsec(strarr, k) {
//     if (strarr.length==0 || k>strarr.length || k<=0){
//         return "";
//     }else{
//         var list =[];
//         for (var i=0;i<strarr.length-k+1;i++)
//         {
//             list[i]=strarr.slice(i,k+i).join('');
//         }
//
//         var longest = list.reduce(function (a, b) { return a.length >= b.length ? a : b; });
//         return longest;
//     }
// }])


// function order(words){
//
//     return words.split(' ').sort(function(a, b){
//         console.log(a, b)
//         return a.match(/\d/) - b.match(/\d/);
//     }).join(' ');
// }
//
// console.log(order('h3llo m1y fri2nd'))

// function sumDigPow(a, b) {
//     var ans = [];
//     while(a <= b){
//         if(a.toString().split('').reduce((x,y,i)=>x +y ** (i + 1),0) ==a)
//             ans.push(a);
//         a++;
//     }
//     return ans;
// }
//
// console.log(sumDigPow(1,10))

// const expandedForm = n => n.toString()
//     .split("")
//     .reverse()
//     .map( (a, i) => a * Math.pow(10, i))
//     .filter(a => a > 0)
//     .reverse()
//     .join(" + ");


// var sum_pairs=function(ints, s){
//     var seen = {}
//     for (var i = 0; i < ints.length; ++i) {
//         if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
//         seen[ints[i]] = true
//         console.log(ints[i])
//     }
// }
// console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8))


//
// var find = /[a-z]{3,}/gi;
// function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }
//
// function abbreviate(string) {
//     return string.replace(find, replace);
// }
//
// console.log(abbreviate("elephant-ride"))

// function multiplicationTable(row,col){
//     var timesTable = [];
//     for(var i = 1; i < row + 1; i++){
//         var timesRow = [];
//         for(var t = 1; t < col + 1; t++){
//             timesRow.push(t * i);
//         }
//         timesTable.push(timesRow);
//     }
//     return timesTable;
// }
//
// console.log(multiplicationTable(3,3))

//
// var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)
//
// console.log(wave('hello'))

//



// function persistence(num) {
//     let counter = 0
//     num = num.toString()
//     while (num.length > 1) {
//         counter++
//         num = num.split('').map(Number).reduce((a, b) => a * b).toString()
//         console.log(num)
//
//     }
//     return counter
// }
//
//
// console.log(persistence(39))


// function arrayDiff(a, b) {
//     return a.filter(e => !b.includes(e));
// }
//
// console.log(arrayDiff([3,4], [3]))

// function removeChar(str){
//     return str.slice(1,-1)
//
// }
//
// console.log(removeChar('eloquent'))
// // let filterHomogenous = a => a.filter(b => b.length > 0 && b.every(e => typeof e == typeof b[0]));
// function squareSum(numbers){
//     return numbers.reduce((total,b)=>total+=Math.pow(b,2),0)
//
// }
//
// console.log(squareSum([-1,-2,3,4]))
// console.log(Math.pow(-2,2))

// const str = "How can mirror?s be real if our eyes aren't real"
// String.prototype.toJadenCasee = function () {
//
//     return this.split(' ').map(function(word){return word[0].toUpperCase()+word.substring(1)}).join(' ')
// };
//
// console.log(str.toJadenCasee("How can mirror?s be real if our eyes aren't real"))
//
// String.prototype.toJadenCase = function () {
//     return this.split(" ").map(function(word){
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
// }
// console.log(str.toJadenCase("How can mirror?s be real if our eyes aren't real"))

// function duplicateCount(text) {
//     let counter = 0
//     let lc = {}
//     for (let el of text){
//         el=el.toLowerCase()
//         if(!lc[el]){
//             lc[el]=1
//         }else{lc[el]++}
//     }for (let el in lc){
//         if(lc[el]>1){
//             counter++
//         }
//     }
//     return counter
// }
//
// console.log(duplicateCount("Indivisibilities"))
// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }
// console.log(duplicateCount("Indivisibilities"))
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return  Math.min(...args)
//     }
// }
// let sif = new SmallestIntegerFinder()
// console.log(sif.findSmallestInt([78,56,232,12,8]))
// function findMissingLetter(array)
// {
//     var i=array[0].charCodeAt();
//     array.map(x=>  x.charCodeAt()==i?i++:i);
//     return String.fromCharCode(i);
// }
//
// function isPrime(num) {
//     if (num < 2) return false;
//     const limit = Math.sqrt(num);
//     for (let i = 2; i <= limit; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isPrime(2))


// function findShort(s){
//     const r =  s.split(' ').map(el=>(el.length)).sort(function (a,b){return a-b})
//     return r[0]
// }
//
//
// function findShort(s){
//     return Math.min(...s.split(' ').map(el=>el.length))
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps\n" +
//     "turns out random test cases are easier than writing out basic ones\n" +
//     "lets talk about javascript the best language"))


// function countSmileys(arr) {
//     return arr.filter(v=>v.match(/(:|;)(-|~)?(\)|D)/)).length
// }
//
// console.log(countSmileys([':D',':~)',';~D',':)']))

//
// function validBraces(braces){
//     let ar = []
//     let bra = {
//         ')':'(',
//         ']':'[',
//         '}':'{'
//     }
//     for (let i = 0; i < braces.length; i++) {
//         let curr = braces[i]
//         if(isClosed(curr)){
//             if(bra[curr]!==ar.pop()){return false}
//         }else{ar.push(curr)}
//         console.log(bra[curr])
//     }return ar.length===0
// }
// function isClosed(ch){return [')',']','}'].indexOf(ch)>-1}


//
// function validBra(b){
//     let bra = {
//         '(':')',
//         '[':']',
//         '{':'}'
//     }
//     console.log(bra[bra[0]])
//
//     let stack = []
//     for (let i = 0; i < b.length; i++) {
//         let ch = bra[i]
//         if (bra[ch]){
//             stack.push(ch)
//             console.log(bra[bra[i]])
//         }else{
//             if(ch!==bra[stack.pop()]){return false}
//
//             console.log(bra[stack.pop()])}
//     }
//
//     return stack.length===0
// }
// console.log(validBra('(){}[]'))

//
// function avg(marks){
//     return  Math.floor(marks.reduce((a,b)=>a+b)/marks.length)
// }
//
// console.log(avg([1,2,3,4,5]))


// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e) : 0
//
// console.log(sumArray([6, 0, 1, 10, 10]))

//
// function narcissistic(value) {
//     const strVal = `${value}`.split('')
//     return strVal.reduce((a,b)=>a+Math.pow(b, strVal.length),0)===value
// }
//
// console.log(narcissistic(371))
//
// function int32toIp(int32){
//     if(int32!==0){
//         let binary = int32.toString(2)
//         console.log(binary)
//         let tmp = []
//         let res = []
//         let i = 8
//         while(i<40) {
//             let current = binary.slice(i - 8, i)
//             tmp.push(current)
//             console.log(current)
//             i += 8
//         }
//         console.log(tmp)
//         for (let i = 0; i < tmp.length; i++) {
//             let int = parseInt(tmp[i], 2)
//             res.push(int.toString())
//         }return res.toString().replace(/,/g, '.')
//         }return '0.0.0.0'
//     }
//
// console.log(int32toIp(2149583361))
// const a = 5
// const b = 2
// console.log(a<<b)


//
// function digitall_root(n) {
//     if(n!==0){
//         const strN = `${n}`
//         let res
//         let tmp = strN
//         while (tmp.length!==1){
//             res = tmp.split('').map(Number).reduce((a,b)=>a+b)
//             tmp = `${res}`
//             console.log(tmp,res)
//         }return res
//     }else return 0
// }

//
// function digital_root(n) {
//     return (n - 1) % 9 + 1;
// }
//
// function digital_root(n) {
//     if (n < 10) return n;
//     return digital_root(
//         n.toString().split('').reduce(function(acc, d) { return  acc + +d; }, 0));
//
// }
//
// console.log()
// const a = 942
// const r = a.toString().split('').reduce(function (acc, d){
//     console.log(acc, d)
//     return acc + +d},0)


// function findOutlier(integers){
// //     let odd = []
// //     let even = []
// //     if (integers.length>=3){
// //         for (let i = 0; i < integers.length; i++) {
// //             if(integers[i]%2===0){
// //                 odd.push(integers[i])
// //             }else{even.push(integers[i])}
// //         }if(odd.length === 1){
// //             return parseInt(odd, 10)
// //         }else return parseInt(even, 10)
// //     }
//=====================================================================
//     const even = integers.filter(a=>a%2===0)
//     const odd = integers.filter(a=>a%2!==0)
//     return even.length===1?even[0]:odd[0]
// }
//
// console.log(findOutlier([2,6,8,10,3]))

//
// function longest(s1, s2) {
//     const r = s1+s2
//     let re = [...new Set(r)]
//     let a = [...new Set(s1)]
//     let b = [...new Set(s2)]
//     console.log(re.sort().join(''))
// }
//
// console.log(longest("aretheyhere", "yestheyarehere"))

//
// function pushElement(arr){
//     const el=1;
//     arr.push(el)
//     return arr.length
// }
// function popElement(arr){
//     //pop an element from arr
//
//     arr.pop()
//     return arr.length
// }
//
// console.log(pushElement([1,2,3]))
// console.log(popElement([1,2,3]))


//
// function towerBuilder(nFloors) {
//     var tower = [];
//     for (var i = 0; i < nFloors; i++) {
//         tower.push(" ".repeat(nFloors - i - 1)
//             + "*".repeat((i * 2)+ 1)
//             + " ".repeat(nFloors - i - 1))
//     }
//     return tower;
// }
// console.log(towerBuilder(3));



// const a = '1001001'
// const r = parseInt(a,2)
//
// console.log(r)


// function findEvenIndex(arr) {
//     let ar = []
//     const le = arr.length
//     if(arr.reduce((a,b)=>a+b)-arr[0]===0){return 0}
//     if(arr.reduce((a,b)=>a+b)-arr[arr.length-1]===0){return arr.length-1}
//     console.log(arr[arr.length-1])
//     arr.reverse()
//     for (let i = 0; i < le; i++) {
//         if(arr.length>=2){
//             ar.push(arr.pop())
//         if (ar.reduce((a, b) => a + b) - ar[i] === arr.reduce((a, b) => a + b)) {
//             return i
//         }
//         }else return -1
//     }
// }
//
// console.log(findEvenIndex([10,-80,10,10,15,35,20]))
// //1 100 50 -51 1 0
// //1 100 50 -51 1
// //1 100 50  2
// //1 100 3
// const a = []
// console.log(a.length)

// function invert(array) {
//     let n = []
//     array.forEach(el=>n.push(el*-1))
//     return n
// }
//
// // console.log(invert([1,2,3,4,5]))
// // function oddOrEven(array) {
// //     if(array.length===0){return 'even'}
// //     if(array.reduce((a,b)=>a+b)%2===0){return "even"}else{return 'odd'}
// // }
// //
// // console.log(oddOrEven([1]))
//
// snail = function(array) {
//     var result;
//     while (array.length) {
//         // Steal the first row.
//         result = (result ? result.concat(array.shift()) : array.shift());
//         console.log(result)
//         // Steal the right items.
//         for (var i = 0; i < array.length; i++)
//             result.push(array[i].pop());
//         // Steal the bottom row.
//         result = result.concat((array.pop() || []).reverse());
//
//         // Steal the left items.
//         for (var i = array.length - 1; i >= 0; i--)
//             result.push(array[i].shift());
//     }
//     return result;
// }
//
//
// console.log(snail([[1,2,3],
//                         [4,5,6],
//                         [7,8,9]]))
// // [1, 2, 3, 6, 9, 8, 7, 4, 5]


// function isIsogram(str){
//     const sorted = str.toLowerCase().split('').sort().join()
//     const unique = [...new Set(str.toLowerCase().split('').sort())].join()
//     console.log(sorted,unique)
//     if (sorted==unique){return true}else{return false}
// }
//
// console.log(isIsogram('Dermatoglyphics'))

// function ara(){
//     const a = 'privet'
//     const b = a[0].toUpperCase()
//     return (b+a.split('').splice(1, a.length).join(''))
// }
// function spsl(){
//     const arr = [1,2,3,4,5,6]
//     const dlt = arr.splice(1,2)
//     console.log(arr, dlt)
// }
// spsl()


class Subject{
    constructor(){
        this.observers = []
    }
    subscribe(observer){
        this.observers.push(observer)
    }

    unsubscribe(observer){
        this.observers = this.observers.filter(obs=>obs!==observer)
    }
    fire(action){
        this.observers.forEach(observer=>{
            observer.update(action)
        })
    }
}

class Observer{
    constructor(state=1){
        this.state = state
        this.initialState = state
    }
    update(action){
        switch(action.type){
            case 'INCREMENT' :
                this.state = ++this.state
                break
            case 'DECREMENT':
                this.state = --this.state
                break
            case 'ADD':
                this.state += action.payload
                break
            default: this.state = this.initialState
        }

    }
}


const stream$ = new Subject()
const obs1 = new Observer(1)
const obs2 = new Observer(42)
stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.fire({type:'INCREMENT'})

console.log(obs1.state);
console.log(obs2.state);