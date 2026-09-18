// Solution: Minimum Size Subarray Sum
// Runtime: 0 ms | Memory: 59.3 MB

function minSubArrayLen(target: number, nums: number[]): number {
    let minLen = Infinity;
    let start = 0;
    let sum = 0;

    for(let end = 0; end < nums.length; end++){
        sum += nums[end];
        // 2 3 1 2
        while(sum >= target){
            minLen = Math.min(minLen, end - start + 1);
            sum -= nums[start];
            start++;
        }

    }

    return minLen === Infinity ? 0 : minLen 

};