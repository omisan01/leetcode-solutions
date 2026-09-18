// Solution: Flatten Deeply Nested Array
// Runtime: 136 ms | Memory: 89.9 MB

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let res = [];

    if(n === 0) return arr;

    for(let a of arr){
        if(n > 0 && Array.isArray(a)){
            const flattenedArr = flat(a, n - 1);
            for(let flat of flattenedArr){
                res.push(flat)
            }
        } else {
            res.push(a)
        }
    }

    return res
};