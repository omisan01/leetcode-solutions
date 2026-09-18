// Solution: Contains Duplicate II
// Runtime: 21 ms | Memory: 71.5 MB

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let state = new Set();
    let start = 0;

    for(let end = 0; end < nums.length; end++){
        if(end - start > k){
            state.delete(nums[start]);
            start++
        }

        if(state.has(nums[end])){
            return true;
        }

        state.add(nums[end])
    }

    return false
};