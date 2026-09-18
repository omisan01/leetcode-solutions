// Solution: Rotate Array
// Runtime: 1 ms | Memory: 65.8 MB

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
   const n = nums.length;
   k = k % n;
    
  // reverse whole array first
  reverse(0, n - 1, nums);

  // Reverse first k numbers 
  reverse(0, k - 1, nums)

    // Reverse remaining numbers
    reverse(k, n - 1, nums)
};

function reverse(left: number , right: number, nums: number[]) {
    while(left < right){
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
}