//                                  LEANER SEARCH 

// let arr = [1,4,3,5,6,2,10,8,7,9]
// let count = 0
// const leanerSearch = (arr, el) => {
//     for(let a = 0; a < arr.length; a++){
//         count += 1
//         if(arr[a]=== el){
//             return a
//         }
//     }
//     return null;
// }
// console.log('count = ',count);
// console.log(leanerSearch(arr,7));

//                                    BINARY SEARCH
// let arr = [1,2,3,4,8,4,]
// const search = function(nums,target){
    
//     let left = 0;
//     let right = nums.length -1;
//     let mid;

//     while(left <= right){
//         mid = Math.round((right-left) / 2) + left;

//         if(target === nums[mid]){
//             return mid
//         }else if(target < nums[mid]){
//             right = mid -1
//         }else{
//             left = mid + 1
//         }
//     }
//     return -1;
// }

//                              binary:     решение с помощю двух указателей

// function twoSum(nums, k) {
//     let r = nums.length - 1;
//     let l = 0;

//     while (l < r) {
//         const sum = nums[l] + nums[r];

//         if (sum === k) {
//             return [nums[l], nums[r]];
//         }

//         if (sum < k) {
//             l++;
//         } else {
//             r--;
//         }
//     }

//     return false;
// }
// console.log(twoSum([-3,-2,0,2,4,3,5,8],3));

// function twoSum(nums, k) {
//     for (let i = 0; i < nums.length; i++) {
//         let numberToFind = k - nums[i];
//         let I = i + 1, r = nums.length - 1;

//         while (I <= r) {
//             let mid = Math.floor(I + (r - I) / 2);

//             if (nums[i] === numberToFind) {
//                 return [nums[i], nums[mid]];
//             }

//             if (numberToFind < nums[mid]) {
//                 r = mid - 1;
//             } else {
//                 I = mid + 1;
//             }
//         }
//     }
//     return [];
// }
// console.log(twoSum([1,2,3,4,5,6],4));