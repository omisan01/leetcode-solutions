// Solution: Filter Occupied Intervals
// Runtime: 139 ms | Memory: 90.7 MB

/**
 * @param {number[][]} occupiedIntervals
 * @param {number} freeStart
 * @param {number} freeEnd
 * @return {number[][]}
 */
var filterOccupiedIntervals = function (occupiedIntervals, freeStart, freeEnd) {
    occupiedIntervals = occupiedIntervals.sort((a, b) => a[0] - b[0])
    const res = []
    res.push(occupiedIntervals[0])
    let i = 1;
    while (i < occupiedIntervals.length) {
        const curr = occupiedIntervals[i];
        const prev = res[res.length - 1];
        if (prev[1] >= curr[0] || prev[1] + 1 === curr[0]) {
            prev[1] = Math.max(prev[1], curr[1])
        } else {
            res.push(curr)
        }
        i++
    }

    const final = [];
    for(let i = 0; i < res.length; i++){
        const [start, end] = res[i];

        if(start < freeStart){
            final.push([start , Math.min(end, freeStart - 1)])
        }

        if(end > freeEnd){
            final.push([Math.max(start, freeEnd + 1) , end ])
        }
        
    }

    return final
};