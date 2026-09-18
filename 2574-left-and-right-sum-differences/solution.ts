// Solution: Left and Right Sum Differences
// Runtime: 3 ms | Memory: 58.5 MB

function leftRightDifference(nums: number[]): number[] {
    let left = 0;
    let right = 0;
    let res = []
    for (const num of nums) {
        right += num;
    }


    for (let i = 0; i < nums.length; i++) {
        right -= nums[i]
        res.push(Math.abs(left - right));
        left += nums[i];
    }

    return res
};