// Solution: Remove Covered Intervals
// Runtime: 2 ms | Memory: 58.2 MB

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b) => {
        if(a[0] === b[0]){
            return b[1] - a[1]
        }
        return a[0] - b[0]
    })
    let res = 1;
    let i = 1;
    while(i < intervals.length){
        const curr = intervals[i];
        const prev = intervals[i - 1];

        if(prev[0] <= curr[0] && prev[1] < curr[1]){
            res+=1
        } else {
            curr[1] = prev[1]
        }

        i++
    }

    return res
};