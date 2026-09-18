// Solution: Maximum Total Sum of K Selected Elements
// Runtime: 195 ms | Memory: 80.3 MB

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} mul
 * @return {number}
 */
var maxSum = function(nums, k, mul) {
    nums = nums.sort((a,b) => b - a);
    let res = 0;
    for(let i = 0; i < k; i++){
        if(mul > 0){
            res += nums[i] * mul;
            mul--
        } else {
            res += nums[i]
        }
    }

    return res
};