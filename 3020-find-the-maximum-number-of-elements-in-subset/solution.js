// Solution: Find the Maximum Number of Elements in Subset
// Runtime: 47 ms | Memory: 72.6 MB

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
    const map = new Map();
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }

    let res = 0;
    if(map.has(1)){
        const ones = map.get(1)
        res = ones % 2 === 0 ? ones - 1 : ones
    }
    for (const [key] of map) {
        

        let total = 0;
        let start = key;

        if(key === 1){
            continue
        }

        if (map.get(key) === 1) {
            res = Math.max(res, 1)
            continue;
        }

        while (map.has(start)) {
            if (map.get(start) >= 2) {
                total += 2
                start = start * start
            } else {
                total++;
                break
            }
        }

        res = Math.max(total, res)
        res = res % 2 === 0 ? res - 1 : res

    }

    return res
};