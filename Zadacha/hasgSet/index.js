// const set = new Set()
// set.add({a:11,b:33})

// const filtered = new Set()
// for(const point of set){
//     if(point.a > 10){
//         filtered.add(point)
//     }
// }
// console.log(filtered.size);
// console.log(set);
// console.log(filtered);

// const set1 = new Set()
// set1.add({a: 10,b:20}).add({a:10,b:30}) 
// set1.forEach((point) => {
//     if(point.a > 10){
//         set1.delete(point)
//     }
// })


// console.log(set1.size);
// const set1 = new Set()
// set1.add(23)
// set1.add(44)
// set1.delete(44)
// set1.clear()
// for(const item of set1){
//     console.log(item)
// }

//                                      TWOSUM
// function twoSum(nums, k) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === k) {
//                 return [nums[i], nums[j]];
//             }
//         }
//     }
//     return false;
// }
// console.log(twoSum([3,4,5,6],7));


// function twoSum(nums, k) {
//     const set = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         const numberToFind = k - nums[i];  // бул коддо k ге барабар сумманы алуу үчүн nums массивинде табыла турган санды эсептөө үчүн колдонулат.
//         if (set.has(numberToFind)) {
//             return [numberToFind, nums[i]];
//         }
//         set.add(nums[i]);
//     }
    
//     return false;
// }
// console.log(twoSum([3,4,5,6],7));
