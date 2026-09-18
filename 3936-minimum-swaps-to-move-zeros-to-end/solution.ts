// Solution: Minimum Swaps to Move Zeros to End
// Runtime: 0 ms | Memory: 58.3 MB

function minimumSwaps(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    let swaps = 0;

    while (left < right) {
        while (left < right && nums[left] !== 0) left++;
        while (left < right && nums[right] === 0) right--;

        if (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            swaps++;
            left++;
            right--;
        }
    }

    return swaps;

    
};