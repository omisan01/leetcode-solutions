// Solution: Binary Digit Score
// Time: 1 ms (100.00%) | Memory: 56.7 MB (100.00%)

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var calculateScore = function(a, b) {
    let n1 = 0;
    let n2 = 0;

    while (a !== 0) {
        n1 += a & 1;
        a >>>= 1;
    }

    while (b !== 0) {
        n2 += b & 1;
        b >>>= 1;
    }

    if (n1 >= n2) {
        return n1 * n2;
    } else {
        return Math.floor(n2 / n1);
    }
};