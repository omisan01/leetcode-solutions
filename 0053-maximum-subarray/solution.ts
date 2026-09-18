// Solution: Maximum Subarray
// Runtime: 0 ms | Memory: 66.1 MB

function maxSubArray(nums: number[]): number {
    let max = -Infinity;
    let sum = 0;

    for(let num of nums){
        if(sum < 0){
            sum = 0
        }
        sum += num;
        max = Math.max(sum, max)
    }

    return max
};