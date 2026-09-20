// Solution: Number of Intersecting Interval Pairs I
// Runtime: 5 ms | Memory: 58.4 MB

function countIntersectingIntervals(intervals: number[][]): number {
    let res = 0;

    for (let i = 0; i < intervals.length; i++) {
        for (let j = i + 1; j < intervals.length; j++) {
            if (intervals[i][0] <= intervals[j][1] && intervals[j][0] <= intervals[i][1]) {
                res += 1;
            }
        }
    }

    return res;
}
