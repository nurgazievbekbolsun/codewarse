// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         let prev = 0;
//         let current = 1;
//         for (let i = 2; i <= n; i++) {
//             const next = prev + current;
//             prev = current;
//             current = next;
//         }
//         return current;
//     }
// }

// const result = fibonacci();
// console.log(result);


// function fibinachi(n){
//     if(n === 1 || n === 2){
//         return 1
//     }
//     return fibinachi(n-1) + fibinachi(n-2)
// }
// console.log(fibinachi());

// const recursyaBinary = (arr,item,start,end) => {
//     let mid = Math.floor    ((start + end) / 2)

//     if(item === arr[mid]){
//         return mid
//     }if(item < arr[mid]){
//         return recursyaBinary(arr,item, 0 , mid -1)
//     }else{
//         return recursyaBinary(arr,item , mid + 1, end)
//     }
// }
// console.log(recursyaBinary(arr, 11, 2,arr.length));