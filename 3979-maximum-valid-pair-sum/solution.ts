// Solution: Maximum Valid Pair Sum
// Runtime: 0 ms | Memory: 74.4 MB

function maxValidPairSum(nums: number[], k: number): number {
    let res = 0;
    let max = nums[0]
    for(let i = k; i < nums.length; i++){
        max = Math.max(nums[i - k],max)
        res = Math.max(res, max + nums[i])
        
    }
    return res
};