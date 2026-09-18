// Solution: Squares of a Sorted Array
// Runtime: 9 ms | Memory: 64 MB

function sortedSquares(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1
    const res = []
    let pos = nums.length - 1;

    while(left <= right){
        if(nums[left] * nums[left] < nums[right] * nums[right]){
            res[pos] = nums[right] * nums[right]
            right--
        } else {
            res[pos] = nums[left] * nums[left]
            left++
        }

        pos--
    }

    return res
};