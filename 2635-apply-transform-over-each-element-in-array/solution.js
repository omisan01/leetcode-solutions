// Solution: Apply Transform Over Each Element in Array
// Runtime: 37 ms | Memory: 53.3 MB

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res = [];

    for(let i = 0; i < arr.length; i++){
        const val = fn(arr[i],i)
        res.push(val)
    }

    return res
};