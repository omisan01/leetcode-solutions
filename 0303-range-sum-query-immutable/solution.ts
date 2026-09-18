// Solution: Range Sum Query - Immutable
// Runtime: 5 ms | Memory: 63.1 MB

class NumArray {
  private readonly sumNums: number[]; // [-2, -2, 3, -2, ..., 1]
  constructor(nums: number[]) {
    this.sumNums = new Array(nums.length);
    this.sumNums[0] = nums[0] ?? 0;
    for (let i = 1; i < nums.length; i++) {
      this.sumNums[i] = this.sumNums[i - 1]! + nums[i]!;
    }
  }

  sumRange(left: number, right: number): number {
    if(left === 0) {
        return this.sumNums[right]
    }
    return this.sumNums[right]! - this.sumNums[left - 1]!;
  }
}


/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */