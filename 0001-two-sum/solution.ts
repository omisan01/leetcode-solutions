// Solution: Two Sum
// Runtime: 4 ms | Memory: 56.3 MB

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const index = map.get(nums[i]!);

    if (index !== undefined) {
      return [index, i];
    } else {
      const diff = target - nums[i]!;
      map.set(diff, i);
    }
  }

  return [];
};