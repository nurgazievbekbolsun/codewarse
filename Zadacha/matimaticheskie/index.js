// function tad(len,wid,hei){
//     let res = len * wid * hei
//     return res
// }
// console.log(tad(2,5,5));


// function sdf(l,w, h){
//     let = l, w, h
//     return  l * w * h
// }
// console.log(sdf(1,2,2));


// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9
// }
// console.log(simpleMultiplication(3));


// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }
// console.log(simpleMultiplication(2));


/***
 * Функция minJumps(start, finish) принимает два аргумента: start и finish, где start 
 * представляет начальную позицию, а finish - конечную позицию. Задача функции - 
 * определить минимальное 
 * количество прыжков, которое нужно сделать, чт
 * обы добраться из начальной позиции в конечную.
 * function minJumps(start, finish) {
    let jumps = 0;
    while (start < finish) {
        if (finish - start >= 3) {
            start += 3;
        } else {
            start++;
        }
        jumps++;
    }
    return jumps;
}
console.log(minJumps(1,5));
 */


// const solution = (start, finish, difference = finish - start) =>
//   Math.floor(difference / 3) + difference % 3;
// console.log(solution(1,6));


// function expressionMatter(a, b, c) {
//     return Math.max(
//         a * (b + c),
//         a * b * c,
//         a + b * c,
//         (a + b) * c,
//         a + b + c
//     );
// }
//   console.log(expressionMatter(10,5,6));


// function litres(time) {
//     return Math.floor(time * 0.5);
// }
// console.log(litres(2));

// function nthEven(n) {
//     return 2 * (n - 1);
// }
// console.log(nthEven(3));
