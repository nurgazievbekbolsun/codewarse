// function checkTask(arr){
//     arr = arr.split(' ')
//    return arr.map(el => el.length)
// }
// console.log(checkTask('jhgfhj gg'));  = [6,2]

// Найдите самое длинное слово в строке и выведите его в консоли
// function len(str){
//     str = str.split(' ')
//     return str.reduce((acc,el)=>{
//         if(acc.length > el.length){
//             return acc
//         }else {
//             return el
//         }
//     })
// }
// console.log(len('q ww eee'))  = 'eee'

// const str = "I am a Megalodon, oceans"
// console.log(str.split(' ').map(el => el.length))  = [1,2,1,9,6]

// Дана функция checkTask(arr) которая принимает массив с предложениями.
// Необходимо вернуть новый массив с количеством слов в каждом предложении.
// Пример: ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

// const ar = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// console.log(ar.map(el => el.length))         = [27,14,30]


// function checkTask(arr){
//     return arr.map(el => el.split('').length)
// }
// console.log(checkTask(["alice and", "i think so too", "this is great"])); = [9,14,13]

// const arr = ['aza','bob','sanjar','aza','bob','sanjar']
// console.log(arr.map((el,inx)=>{
//     if(inx % 2 !== 0 ){
//         return el.toUpperCase()
//     }else {
//         return el
//     }
// }))

// Дана функция checkTask(arr) которая принимает массив c числами.
// При помощи метода reduce необходимо вернуть новый массив без дубликатов.
// Пример: Дан массив: [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10]. Результат: [18, 21, 1, 51, 5, 7, 10]

// function checkTask(arr){
//     return arr.reduce((acc,el)=>{
//         if(!acc.includes(el)){
//             acc.push(el)
//         }
//         return acc
//     },[])
// }
//
// console.log(checkTask([18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10]))


// Посчитать сумму чисел до первого нуля.
// [12, 23, 3, 77, 42, 0, 6, 9, 12, 10]
// const numbers = [12, 23, 3, 77, 42, 0, 6, 9, 12, 10];

// function f(num) {
//     let sum= 0
//     for (let i = 0; i < num.length; i++){
//         sum += num[i]
//         if(num[i] === 0){
//             break
//         }
//     }
//     return sum
// }
//
// console.log(f([12, 23, 3, 77, 42, 0, 6, 9, 12, 10]));


// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное
// значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести
// в консоль аргументы в обратном порядке (использовать цикл while)

// function random(num){
//     let value = num
//     let limit = 1000
//
//     while (value < limit){
//         console.log(value)
//         value *= 2
//     }
//     while (value > num){
//         value /= 2
//         console.log(value)
//     }
// }
//
// random(50)

// const arr = ['aza','bob','san']
// const a = arr.map(el => el.slice(0,-1) + el[el.length -1].toUpperCase())
// console.log(a)  = [azA, boB,saN]




// let arr = ['Bishkek','Naryn','Motion Web','almata']
// console.log(arr.filter(el =>{
//     return el.includes('a')
// }))


// let arr = [4,6,124,43,23,5,65]
// const a =arr.reduce((acc,el)=>{
//     return acc + el
// },0)
// //
// console.log(a)
// let sun = 0
// for (let i=0 ; i <arr.length; i++){
//     sun+= arr[i]
// }
// console.log(sun)


// let arr = [4,6,124,43,23,5,65]
// let max = arr[0]
// for (let i = 0 ; i<arr.length; i++){
//     if(arr[i] > max){
//         max= arr[i]
//     }
// }
// console.log(max)

// let max = arr.reduce((acc,el)=> Math.max(acc,el),0)
// arr.sort((a,b)=> a-b)
// let max = arr[arr.length-1]
// console.log(max)
// console.log(Math.max(...arr))


// let user = [
//     {
//         age: -20,
//         name: 'Bob'
//     },
//     {
//         age: 20,
//         name: 'ewsgfdhvn'
//     },
//     {
//         age: 13,
//         name: 'Boban'
//     },
//     {
//         age: 26,
//         name: 'alekhs'
//     },
//     {
//         age: 46,
//         name: 'asa'
//     },
//     {
//         age: 40,
//         name: 'asa'
//     },
// ]

// let arr = user.sort((a,b) => b.name.length - a.name.length)
// let arr = user.sort((a,b) => a.name.localeCompare(b.name))
// let str = arr.reduce((acc,el)=> {
//     if (el.name.length > acc.name.length){
//         return el
//     }else {
//         return acc
//     }
// })
// console.log(arr)
// console.log(str)

// let s = user.sort((a,b) => a.age - b.age)
// console.log(user)
// let aa = s.filter(el => el.age >= 26)
// console.log(aa)
// user.sort((a,b)=> a.name.localeCompare(b.name))
// console.log(user)


// function arr (i,p){
//     return i.filter(el => el % p === 0)
// }
// console.log(arr([1, 2, 3, 4, 5, 6], 2))


// const frits = ['kiwi', 'apple', 'arbuz', "kiwi", "apple", 'orange']
// const occurrences = {};
// for (const i of frits) {
//     occurrences[i] = (occurrences[i] || 0) + 1;
// }

// const occurrences = frits.reduce((acc, el) => {
//     acc[el] = (acc[el] || 0) + 1;
//     return acc;
// }, {});
//
// console.log(occurrences);


// function arr(l){
//     const count = {}
//     l.forEach(f =>{
//         if(!count[f]){
//             count[f] = 1
//         }else {
//             count[f] ++
//         }
//     })
// return count
// }
//
// console.log(arr(frits))

// for (let i = 0; i <= 50; i++){
//     console.log(i)
// }

// let arr =[]
// for(let i = 0; i < 10; i++){
// arr.push('x')
// arr[i] = 'x'   n
// }
// console.log(arr)

// let arr = [3,6,2,6]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// let arr = [4,2,7,5]
// let sun = 1
// for (let i = 0; i < arr.length; i++){
//     sun = sun * arr[i]
//
// }
// console.log(sun)

// for (let i= 0; i < 100; i++){
//     if(i % 2 === 0 ){
//         console.log(i)
//     }
// }

// let result = 0
// for (let i = 0; i < 10; i++){
//     result += i
// }
// console.log(result)

// let arr = [2,5,3,6,8,1,10]
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i])
//     }
// }

// let arr = [12,-345,34,-6,38 ,22]
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         console.log(arr[i])
//     }
// }


// let arr = [23,134,4,45,65,23]
// for (let i =0; i < arr.length; i++){
//    if( arr[i] === 4){
//        break
//    }else {
//        console.log(arr[i])
//    }
// }

// let arr = [23, 134, 4, 45, 65, 23]
// for (let i = 0; i < arr.length; i++) {
// const a = String(arr[i])[0]
//     if(a == 1 || a == 4){
//         console.log(arr[i])
//     }
// }


// Получаем ссылку на элемент video
// const videoElement = document.getElementById('myVideo');
//
// // Ожидаем, пока метаданные (включая длительность видео) будут загружены
// videoElement.addEventListener('loadedmetadata', function() {
//     // Получаем длительность видео в секундах
//     const videoDurationSeconds = videoElement.duration;
//
//     // Конвертируем длительность в минуты
//     const videoDurationMinutes = Math.floor(videoDurationSeconds );
//
//     // Выводим результат
//     console.log(`Длительность видео: ${videoDurationMinutes} сек`);
// });


// const canvas = document.querySelector('.canvas')

// const arr = [12,128,32,13,4,32].reduce((acc , el ) => acc > el ? acc : el )
// arr

// let arr = [4,6,124,43,23,5,65]
// let max = arr[0]
// for (let i = 0 ; i<arr.length; i++){
//     if(arr[i] > max){
//         max= arr[i]
//     }
// }
// console.log(max)
// let arr = [1,4,7,0,89,124,988,90,43,23,599,65]
// let max = arr[0]
// for(let a = 0; a < arr.length; a++){
//     if(arr[a] > max){
//         max = arr[a]
//     }
// }
// console.log(max);

// let array = [1, 4, 7, 0, 89, 1204, 988, 90, 43, 23, 599, 65];
// let maxl = array[0];
// array.map((el, i) => {
//   if (el > maxl) {
//     maxl = el;
//   }
// });
// maxl;
// let array2 = [1, 4, 7, 0, 89, 1204, 988, 90, 43, 23, 599, 65];
// let value = array2[0];
// array2.forEach((el) => {
//   if (el > value) {
//     value = el;
//   }
// });
// value;

// let array3 = [1, 4, 7, 89, 1204, 988, 90, 43, 23, 599, 65].reduce((acc, el) =>
//   el < acc ? el : acc
// );
// array3;

// let array4 = ['d', 'a', 'b', 'c'].sort((a,b) => b.localeCompare(a))
// array4
// let array4 = ['d', 'a', 'b', 'c'].sort((a,b) => a > b ? 1 : -1 )
// array4

// function task(a) {
//   if (a.split("").reverse().join("") == a) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(task('pac'));


// let tru = "opo"
// if(tru.split('').reverse().join('') == tru){
//      console.log('true');
// }else{
//      console.log('false');
// }
