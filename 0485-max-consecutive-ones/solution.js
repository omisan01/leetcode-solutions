// Solution: Max Consecutive Ones
// Runtime: 4 ms | Memory: 59.6 MB

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let count = 0;
    for (let num of nums) {
        if (num === 1) {
            count += 1
            max = Math.max(count, max)
        }

        if (num !== 1) {
            count = 0
        }
    }

    return max
};