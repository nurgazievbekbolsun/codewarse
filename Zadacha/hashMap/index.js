// const map1 = new Map()
// map1.set('b','foo djfsj dfjadf odjfadf')
// console.log(map1.delete('b'));
// console.log(map1.get('b') );
// console.log(map1.has('b')); 


// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const hashMap = new Map();
//     for (const char of str1) {
//         hashMap.set(char, (hashMap.get(char) || 0) + 1);
//     }
//     for (const char of str2) {
//         if (!hashMap.has(char) || hashMap.get(char) === 0) {
//             return false;
//         }
//         hashMap.set(char, hashMap.get(char) - 1);
//     }
//     return true;
// }

// function groupAnagrams(strs) {
//     const hashMap = new Map();
//     for (const str of strs) {
//         const sortedStr = str.split('').sort().join('');
//         if (hashMap.has(sortedStr)) {
//             hashMap.get(sortedStr).push(str);
//         } else {
//             hashMap.set(sortedStr, [str]);
//         }
//     }
//     return Array.from(hashMap.values());
// }
// function firstUniqueChar(str) {
//     const hashMap = new Map();
//     for (const char of str) {
//         if (hashMap.has(char)) {
//             hashMap.set(char, hashMap.get(char) + 1);
//         } else {
//             hashMap.set(char, 1);
//         }
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (hashMap.get(str[i]) === 1) {
//             return str[i];
//         }
//     }
//     return null;
// }
// function countElements(arr) {
//     const hashMap = new Map();
//     for (const element of arr) {
//         if (hashMap.has(element)) {
//             hashMap.set(element, hashMap.get(element) + 1);
//         } else {
//             hashMap.set(element, 1);
//         }
//     }
//     return hashMap;
// }



// const myMap = new Map();
// const myMap = new Map()
// myMap.set('name', 'Nazim');
// myMap.set('age', 10);

// console.log(myMap.get('name')); 
// console.log(myMap.get('age')); 

// const map1 = new Map()

// map1.set('0','zero')
// map1.set('1','one')

// const iterator1 = map1.values()
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

// const map2 = new Map()
// map2.set(1,'one')
// map2.set(2,'two')

// const iterator2 = map2.keys()
// console.log(iterator2.next().value);
// console.log(iterator2.next().value);
// console.log(map2.has(1));
// console.log(map2.has(3));

// const map3 = new Map()

// map3.set(1,'1111111')
// map3.set(2,'2222222')

// const iterator3 = map3.entries()

// console.log(iterator3.next().value);
// console.log(iterator3.next().value);
// console.log(map3.delete(2))