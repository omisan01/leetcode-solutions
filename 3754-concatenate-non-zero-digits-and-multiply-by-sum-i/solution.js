// Solution: Concatenate Non-Zero Digits and Multiply by Sum I
// Runtime: 0 ms | Memory: 55.2 MB

/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let res = 0
    let pos = 1
    let sum = 0
    while(n > 0){
        const lastDig = n % 10;
        if(lastDig !== 0){
            res += lastDig * pos;
            sum += lastDig
            pos = pos * 10
        }
        n = Math.floor(n / 10)
    }
    return res * sum
};