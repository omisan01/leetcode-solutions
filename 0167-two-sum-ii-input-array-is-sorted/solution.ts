// Solution: Two Sum II - Input Array Is Sorted
// Runtime: 0 ms | Memory: 56.5 MB

function twoSum(numbers: number[], target: number): number[] {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    let currentSum = numbers[start] + numbers[end];

    if (currentSum < target) {
      start++;
    } else if(currentSum > target)  {
      end--;
    } else {
        return [start + 1, end + 1];
    }
  }

  return [];
}
