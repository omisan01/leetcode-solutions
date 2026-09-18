// Solution: Maximum Subarray
// Runtime: 4 ms | Memory: 65.4 MB

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let max = -Infinity;

    for(let num of nums){
        if(sum < 0){
            sum = 0
        }
        sum += num
        max = Math.max(max, sum )
    }

    return max
};