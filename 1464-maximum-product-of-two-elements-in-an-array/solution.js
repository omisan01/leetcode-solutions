// Solution: Maximum Product of Two Elements in an Array
// Runtime: 3 ms | Memory: 54.5 MB

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b) => b - a)

    return (nums[0] - 1) * (nums[1] - 1)
};