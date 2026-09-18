// Solution: Number of Strings That Appear as Substrings in Word
// Runtime: 0 ms | Memory: 52.8 MB

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let res = 0
    for(let pattern of patterns){
            if(word.includes(pattern)){
                res += 1
            }
    }

    return res
};