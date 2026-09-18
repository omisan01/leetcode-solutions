// Solution: Contains Duplicate
// Runtime: 11 ms | Memory: 74.7 MB

function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}
