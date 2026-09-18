// Solution: Number of Substrings Containing All Three Characters
// Runtime: 8 ms | Memory: 55.5 MB

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let start = 0;
    let count = 0;
    const charArr = new Array(3).fill(0);
    let unSeen = 3

    for (let end = 0; end < s.length; end++) {
        if(charArr[s.charCodeAt(end) - 97] === 0){
            unSeen -= 1
        }
        charArr[s.charCodeAt(end) - 97] += 1;


        while (unSeen === 0) {
            count += (s.length - end)
            charArr[s.charCodeAt(start) - 97]--;
            if(charArr[s.charCodeAt(start) - 97] === 0){
                unSeen++
            }

            start++;
        }

    }

    return count
};