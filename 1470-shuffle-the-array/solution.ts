// Solution: Shuffle the Array
// Runtime: 50 ms | Memory: 57.9 MB

function shuffle(nums: number[], n: number): number[] {
    const res = [];
    let j = 0
    for(let i = 0; i < n; i++){
        res[j++] = nums[i];
        res[j++] = nums[n + i]
    }

    return res
};