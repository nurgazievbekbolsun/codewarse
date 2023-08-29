// function cashFunction(fn){
//     const cash = {}
//     return function(n) {
//         if(cash[n]){
//             console.log('vizato iz kesha',cash[n]);
//             return cash[n]
//         }
//         let result = (fn)
//         console.log('poschital',result);
//         cash[n] = result
//         return result
//     }
// }

// function factorial(n){
//     let res = 1
//     while(n != 1){
//         res *= n
//         n -= 1
//     }
//     return res
// }
// const cashFactorial = cashFunction(factorial())
// cashFactorial(3)
// cashFactorial(5)
// cashFactorial(4)
// console.log(cashFactorial(2));
