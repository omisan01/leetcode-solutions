// Solution: Flatten Deeply Nested Array
// Runtime: 144 ms | Memory: 92.7 MB

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
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