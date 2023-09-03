// function findNumbers(n, k) {
//     const result = [];
  
//     function countOnes(num) {
//       let count = 0;
//       while (num > 0) {
//         count += num % 2;
//         num = Math.floor(num / 2);
//       }
//       return count;
//     }
  
//     for (let num = 0; num < Math.pow(2, n); num++) {
//       if (countOnes(num) === k) {
//         result.push(num);
//       }
//     }
  
//     return result;
//   }
  
//   console.log(findNumbers(4, 1));  // [1, 2, 4, 8]
//   console.log(findNumbers(5, 5));  // [31]
//   console.log(findNumbers(3, 20)); // []
//   console.log(findNumbers(20, 0)); // [0]
//                                                     VARIANT 2

// function kBitsDigits(n, k) {
//     return k > n ? [] : k == 0 ? [0] :
//       kBitsDigits(n - 1, k).concat(kBitsDigits(n - 1, k - 1).map(x => x | 1 << n - 1));
//   }

  
  