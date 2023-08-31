// function lengthOfLongestSubstring(s) {
//     if (!s) {
//         return 0;
//     }

//     let max_substr = 0;
//     let l = 0;
//     const uniqueSet = new Set();

//     for (let r = 0; r < s.length; r++) {
//         while (uniqueSet.has(s[r])) {
//             uniqueSet.delete(s[l]);
//             l++;
//         }

//         uniqueSet.add(s[r]);
//         max_substr = Math.max(max_substr, r - l + 1);
//     }

//     return max_substr;
// }

// // Пример использования:
// const s = "abcabcbb";
// const result = lengthOfLongestSubstring(s);
// console.log(result); 