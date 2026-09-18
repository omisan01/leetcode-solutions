// Solution: Sliding Window Maximum
// Runtime: 414 ms | Memory: 86 MB

function maxSlidingWindow(nums: number[], k: number): number[] {
    const deque: number[] = [];
    const result: number[] = [];

    for(let end = 0; end < nums.length; end++){

        if (deque.length > 0 && deque[0] < end - k + 1) {
            deque.shift();
        }

        while(deque.length > 0 && nums[deque[deque.length - 1]] < nums[end]){
            deque.pop();
        };
        deque.push(end);

        if (end >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    

    return result;
};