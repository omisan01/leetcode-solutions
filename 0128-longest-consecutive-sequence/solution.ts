// Solution: Longest Consecutive Sequence
// Runtime: 36 ms | Memory: 80.9 MB

function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);
    let longest = 0;

    for(let num of set){
        if(!set.has(num - 1)){
            let streak = 1;

            while(set.has(num + streak)){
                streak++
            }

            longest = Math.max(longest, streak)
        }
    }

    return longest
};