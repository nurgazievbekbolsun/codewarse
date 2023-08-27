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

