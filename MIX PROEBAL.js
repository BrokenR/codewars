function mix(s1, s2) {
    const but = /[a-z]/g
    let counter1 = []
    let counter2 = []
    let ar = []
    let result = []
    s1.split('')
    s2.split('')
    function splitByIndex(value, index) {
        return value.substring(index)
    }
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] == s1[i].toLowerCase() && s1[i].match(but)) {

            counter1[s1[i]] = counter1[s1[i]] ? counter1[s1[i]] + 1 : 1
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] == s2[i].toLowerCase() && s2[i].match(but)) {
            counter2[s2[i]] = counter2[s2[i]] ? counter2[s2[i]] + 1 : 1
        }
    }
    // console.log(counter1, counter2,Object.keys(counter1), Object.keys(counter2).length,Object.values(counter1),Object.values(counter2))
//     if (Object.keys(counter1).length > Object.keys(counter2).length) {
//         for (let i = 0; i < Object.keys(counter1).length; i++) {
//             for (let j = 0; j < Object.keys(counter2).length; j++) {
//                 if (Object.keys(counter1)[i] === Object.keys(counter2)[j] && Object.values(counter1)[i] > Object.values(counter2)[j] && Object.values(counter1)[i] >= 2 | Object.values(counter2)[j] >= 2) {
//                     ar.push(`1:${Object.keys(counter1)[i].repeat(Object.values(counter1)[i])}/`)
//                 } else if (Object.keys(counter1)[i] === Object.keys(counter2)[j] && Object.values(counter1)[i] < Object.values(counter2)[j] && Object.values(counter1)[i] >= 2 | Object.values(counter2)[j] >= 2) {
//                     ar.push(`2${Object.keys(counter2)[i].repeat(Object.values(counter2)[i])}/`)
//                 } else if (Object.keys(counter1)[i] === Object.keys(counter2)[j] && Object.values(counter1)[i] == Object.values(counter2)[j] && Object.values(counter1)[i] >= 2 | Object.values(counter2)[j] >= 2) {
//                     ar.push(`=:${Object.keys(counter1)[i].repeat(Object.values(counter1)[i])}/`)
//                 }else if (!(Object.keys(counter1).includes(Object.keys(counter2)[j])) && Object.values(counter1)[i] >= 2&&(!(ar.includes(Object.keys(counter2)[j])))) {
//                     ar.push(`2:${Object.keys(counter2)[j].repeat(Object.values(counter2)[j])}/`)
//                 }
//             }
//             if (!(Object.keys(counter2).includes(Object.keys(counter1)[i])) && Object.values(counter1)[i] >= 2) {
//                 ar.push(`1:${Object.keys(counter1)[i].repeat(Object.values(counter1)[i])}/`)
//             } else {
//                 console.log("")
//             }
//             // 1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"
//
// // МБ ИНКЛЮД, ОН ЕСТЬ В ОДНОМ НО НЕТ В ДРУГОМ, ПРОВЕРКА ЕСЛИ НЕТ В ДРУГОМ ТО ПИШЕМ ЧТО ЕСТЬ
//         }return ar
//     } if (Object.keys(counter1).length < Object.keys(counter2).length) {
    for (let i = 0; i < Object.keys(counter2).length; i++) {
        for (let j = 0; j < Object.keys(counter1).length; j++) {
            if (Object.keys(counter2)[i] === Object.keys(counter1)[j] && Object.values(counter2)[i] > Object.values(counter1)[j] && Object.values(counter2)[i] >= 2 | Object.values(counter1)[j] >= 2) {
                ar.push(`2:${Object.keys(counter2)[i].repeat(Object.values(counter2)[i])}/`)
            } else if (Object.keys(counter2)[i] === Object.keys(counter1)[j] && Object.values(counter2)[i] < Object.values(counter1)[j] && Object.values(counter2)[i] >= 2 | Object.values(counter1)[j] >= 2) {
                ar.push(`1:${Object.keys(counter2)[i].repeat(Object.values(counter1)[j])}/`)
            } else if (Object.keys(counter2)[i] === Object.keys(counter1)[j] && Object.values(counter2)[i] == Object.values(counter1)[j] && Object.values(counter2)[i] >= 2 | Object.values(counter1)[j] >= 2) {
                ar.push(`=:${Object.keys(counter2)[i].repeat(Object.values(counter2)[i])}/`)
            } else if (!(Object.keys(counter1).includes(Object.keys(counter2)[i])) && Object.values(counter2)[i] >= 2 && (!(splitByIndex(ar.join(),3).includes(Object.keys(counter2)[i])))) {
                ar.push(`2:${Object.keys(counter2)[i].repeat(Object.values(counter2)[i])}/`)
            } else if (!(Object.keys(counter2).includes(Object.keys(counter1)[j])) && Object.values(counter1)[j] >= 2 && (!(splitByIndex(ar.join(),3).includes(Object.keys(counter1)[j])))) {
                ar.push(`1:${Object.keys(counter1)[j].repeat(Object.values(counter1)[j])}/`)
            }

            // 1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"

// МБ ИНКЛЮД, ОН ЕСТЬ В ОДНОМ НО НЕТ В ДРУГОМ, ПРОВЕРКА ЕСЛИ НЕТ В ДРУГОМ ТО ПИШЕМ ЧТО ЕСТЬ
        }
    }

    // console.log(b,'   ',a,'   ',b[0], a[0])
    const rrr = ar.sort(function (a, b) {

        return b.length-a.length||a.localeCompare(b)}
    )
    const res = rrr.join().split('/,')
    for (let i = 0; i < Object.keys(res); i++) {
        for (let j = 0; j < 1; j++) {
            if(res[i].length===res[i+1].length){
                res[i].replace(/[12=]/g, function($1) { return $1 === '=' ? res[i] : '=' })
                result.push(res[i])}
        }
        console.log(Object.keys(res))
    }



    // console.log(rrr.replace(/[\s.,%]/g, '').trim())

}


console.log(mix('mmmmm m nnnnn y&friend&Paul has heavy hats! &', 'my frie n d Joh n has ma n y ma n y frie n ds n&'))