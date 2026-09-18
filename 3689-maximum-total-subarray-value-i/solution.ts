// Solution: Maximum Total Subarray Value I
// Runtime: 1 ms | Memory: 66.5 MB

function maxTotalValue(nums: number[], k: number): number {
    let min = Infinity;
    let max = 0

    for(let i = 0; i < nums.length; i++){
        min = Math.min(min, nums[i])
        max = Math.max(max, nums[i])
    }

    return (max - min) * k
};