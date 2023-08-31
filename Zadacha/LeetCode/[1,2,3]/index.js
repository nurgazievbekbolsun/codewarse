const subsets = function(nums) {
    const result = [];
    const n = nums.length;
    
    for (let i = 0; i < Math.pow(2, n); i++) {
        const subset = [];
        for (let j = 0; j < n; j++) {
            if ((i & (1 << j)) !== 0) {
                subset.push(nums[j]);
            }
        }
        result.push(subset);
    }
    
    return result;
};
console.log(subsets([1,2]));