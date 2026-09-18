// Solution for: Two Sum
// Time: 4 ms (52.52%) | Memory: 57.7 MB (23.17%)

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