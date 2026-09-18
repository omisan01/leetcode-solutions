// Solution: Array Reduce Transformation
// Runtime: 50 ms | Memory: 55.6 MB

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let startIndex: number = init ? 0 : 1;
    let acc: number = init ? init : nums[0];

    for (let i: number = startIndex; i < nums.length; i++) {
        if (i in nums) {
            acc = fn(acc, nums[i])
        }
    }

    return acc
};