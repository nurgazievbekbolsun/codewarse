// function countTrailingZeros(n) {
//     let count = 0;
//     while (n >= 5) {
//         n = Math.round(n / 5);
//         count += n;
//     }
    
//     return count;
// }
// console.log(countTrailingZeros(30)); 


// function multiplyStrings(num1, num2) {
//     const len1 = num1.length;
//     const len2 = num2.length;
//     const result = new Array(len1 + len2).fill(0);

//     for (let i = len1 - 1; i >= 0; i--) {
//         for (let j = len2 - 1; j >= 0; j--) {
//             const product = Number(num1[i]) * Number(num2[j]);
//             const sum = product + result[i + j + 1];

//             result[i + j] += Math.floor(sum / 10);
//             result[i + j + 1] = sum % 10;
//         }
//     }

//     // Убираем ведущие нули
//     while (result.length > 1 && result[0] === 0) {
//         result.shift();
//     }

//     return result.join('');
// }
