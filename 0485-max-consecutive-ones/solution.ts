// Solution: Max Consecutive Ones
// Runtime: 6 ms | Memory: 62.2 MB

function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0;
    let count = 0;
    for(let num of nums){
        if(num === 1){
            count += 1
            max = Math.max(count, max)
        } 
        
        if(num !== 1) {
            count = 0
        }
    }

    return max
};