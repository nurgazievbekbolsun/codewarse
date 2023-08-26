//                                     POLINDROM
//                                      1
// function palin(str){
//     let res = str.replace(/[\s ",.!?/-]/g, '').toLowerCase()
//     if(res === res.split(' ').reverse().join('')){
//         console.log('true');
//     } else{
//         console.log('false');
//     }
// }
// console.log(palin('pup'));
//                                        2
//     function palindrome(str){
//     str = str.replace(/[\s ".,!?/-]/g, '').toLowerCase()
//     return str === str.split('').reverse().join('')
// }
// console.log(palindrome('"Пустите!" - Летит супу миска Максиму - "Пустите,летит суп !"'))


//                               MASIVDIN EN CHON SANDY TABU

//                                         1

// let arr = [1,2,3,4,43,56,5,].reduce((acc,el) => acc > el ? acc : el)

//                                         2
// let arr = [1,2,3,4,5] 
// let res = arr[0]
// arr.map(el => {
//     if(el > res){
//         res = el
//     }
// })
// console.log(res);

//                                         3

// const fo = [1,2,9,3,4]
// let max = fo[0]
// for(let a = 0; a < fo.length; a++){
//     if(fo[a] > max){
//         max = fo[a]
//     }
// }
// console.log(max);

//                       MASIVDIN ICHINDEGI ELEMENTERDI 0 SANYNA CHEIIN KOSHU

// function task(arr) {
    // let res = 0
    // for(let a = 0; a < arr.length; a++){
    //     res += arr[a]
    //     if(arr[a] === 0){
    //         // res = 0
    //         break
    //     }
    // }
    // return res
    // console.log(task([1,2,3,4,0,92]));
    
//                           STRAKANYN ICHINDEGI SOZDORDUN UZUNDUGUN TABY 

// const str = "I am a Megalodon, oceans feeling like a pond"
// console.log(str.split(' ').map(el => el.length));

//                           STRAKANYN ICHINDEGI SOZDORDUN EN UZUNUN TABU

//                                          1
// function length(str){
//     str = str.split(' ')
//     return str.reduce((acc, el)=> {
//         if(el.length > acc.length){
//             return el 
//         }else{
//             return acc
//         }
//     })
// }
// console.log(length('a qq qqq qqqq'));

//                                           2 
// let arr = 'i go to shcool'.split(' ')
//  arr = arr.reduce((acc,el ) => {
//     if(acc.length > el.length) {
//         return acc
//     }
//     else{
//         return el
//     }
// })
// console.log(arr);

//                                              3

// const arrs = "i, go, to, shcoo".split(' ')
// const res = arrs.reduce((acc, el) => {
//     return el.length < acc.length ? acc : el
// })
// res




