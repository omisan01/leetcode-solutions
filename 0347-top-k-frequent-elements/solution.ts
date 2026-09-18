// Solution: Top K Frequent Elements
// Runtime: 5 ms | Memory: 58.9 MB

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  const topKNumbers: number[] = [];
  const buckets: number[][] = [];

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [num, freq] of map) {
    if (!buckets[freq]) {
      buckets[freq] = [];
    }
    buckets[freq].push(num);
  }

  for (let i = buckets.length - 1; i > 0; i--) {
    if (buckets[i]) {
      for (const num of buckets[i]!) {
        topKNumbers.push(num);
        if (topKNumbers.length === k) {
          return topKNumbers;
        }
      }
    }
  }
}