// Solution: Rank Transform of an Array
// Runtime: 50 ms | Memory: 79.9 MB

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
    const map = new Map();

    for(let i = 0; i < arr.length; i++){
        map.set(sortedArr[i], i + 1)
    }

    return arr.map((num) => map.get(num))

};