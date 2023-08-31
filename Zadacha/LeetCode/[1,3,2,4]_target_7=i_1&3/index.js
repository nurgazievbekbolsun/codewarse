var twoSum = function(nums, target) {
    let myHash = new Map()
    for(let i = 0;i < nums.length;i++){
        let a = target - nums[i]
        if(myHash.has(a)){
            return [myHash.get(a),i]
        }
        myHash.set(nums[i],i)
    }
    return [-1,-1]
};