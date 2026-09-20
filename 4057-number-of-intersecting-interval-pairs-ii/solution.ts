// Solution: Number of Intersecting Interval Pairs II
// Runtime: 152 ms | Memory: 98.6 MB

function countIntersectingIntervals(intervals: number[][]): number {
    const n = intervals.length
    const starts = intervals.map(interval => interval[0]).sort((a,b) => a - b)
    const ends = intervals.map(interval => interval[1]).sort((a,b) => a - b)
    let nonIntersecting = 0;
 

    let j = 0;
    for(let i = 0; i < n; i++){
        while(j < n && ends[j] < starts[i]){
            j++
        }
            nonIntersecting += j
    }

    const total = n * (n - 1) / 2
    return total - nonIntersecting
};