// Solution: Array Reduce Transformation
// Runtime: 35 ms | Memory: 54.1 MB

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let startIndex = init ? 0 : 1;
    let acc = init ? init : nums[0];

    for(let i = startIndex; i < nums.length; i++){
        if(i in nums){
            acc = fn(acc, nums[i])
        }
    }

    return acc
    
};