// Solution: Guess Number Higher or Lower
// Runtime: 37 ms | Memory: 54.9 MB

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
    let left = 0;
    let right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (guess(mid) === 0) {
            return mid;
        } else if (guess(mid) === -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return 0;
}
