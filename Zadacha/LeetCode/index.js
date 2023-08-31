// function generateParenthesis(n) {
//     const result = [];

//     function backtrack(current, open, close) {
//         if (current.length === 2 * n) {
//             result.push(current);
//             return;
//         }

//         if (open < n) {
//             backtrack(current + "(", open + 1, close);
//         }
//         if (close < open) {
//             backtrack(current + ")", open, close + 1);
//         }
//     }

//     backtrack("", 0, 0);
//     return result;
// }
// console.log(generateParenthesis(2));
// function canConstruct(ransomNote, magazine) {
//     const charCount = new Array(26).fill(0); 
//     for (const char of magazine) {
//         const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
//         charCount[index]++;
//     }
//     for (const char of ransomNote) {
//         const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
//         if (charCount[index] === 0) {
//             return false; 
//         }
//         charCount[index]--;
//     }
//     return true; 
// }
// const magazine = "sdsfghfdd";
// const ransomNote = "sdfdgj";
// const result = canConstruct(ransomNote, magazine);
// console.log(result);

//                                     variant 2  obekt menen jonokoi jana chitaemyi  

// const canConstruct = function (ransomNote, magazine) {
//     const charCount = {};
//     for (const char of magazine) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     for (const char of ransomNote) {
//         if (!charCount[char]) {
//             return false;
//         }
//         charCount[char] -= 1;
//     }
//     return true;
// };
//                                            variant 3

// const canConstruct = function (ransomNote, magazine) {
//     for (const char of magazine) {
//       ransomNote = ransomNote.replace(char, "");
//     }
//     if (!ransomNote) return true;
//     else return false;
//   };
//   const ransomNote = 'aa'
//   const magazine = 'aa'
//   const res = canConstruct(ransomNote,magazine)
//   console.log(res);




