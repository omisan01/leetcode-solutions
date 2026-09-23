// Solution: Next Permutation
// Time: 0 ms (100.00%) | Memory: 57.6 MB (50.64%)

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let i = nums.length - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }

    if (i >= 0) {
        let j = nums.length - 1;
        while (j > i && nums[j] <= nums[i]) {
            j--
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]

    }
// Reverse i+1 to end
    let l = i + 1;
    let r = nums.length - 1

    while(l < r){
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++;
        r--
    }
};