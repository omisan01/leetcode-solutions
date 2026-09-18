// Solution: Sort Colors
// Runtime: 0 ms | Memory: 55 MB

function sortColors(nums: number[]): void {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      const realLow = nums[low];
      nums[low] = nums[mid]!;
      nums[mid] = realLow!;
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      const realHigh = nums[high];
      nums[high] = nums[mid]!;
      nums[mid] = realHigh!;
      high--;
    }
  }
}