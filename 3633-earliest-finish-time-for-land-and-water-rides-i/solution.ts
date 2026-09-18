// Solution: Earliest Finish Time for Land and Water Rides I
// Runtime: 7 ms | Memory: 59 MB

function earliestFinishTime(
    landStartTime: number[],
    landDuration: number[],
    waterStartTime: number[],
    waterDuration: number[]
): number {
    const n = landStartTime.length;
    const m = waterStartTime.length;

    let min = Infinity;
    for (let i = 0; i < n; i++) {
        const firstFinish = landStartTime[i] + landDuration[i];
        for (let i = 0; i < m; i++) {
            min = Math.min(
                min,
                Math.max(waterStartTime[i], firstFinish) + waterDuration[i]
            );
        }
    }

    for (let i = 0; i < m; i++) {
        const firstFinish = waterStartTime[i] + waterDuration[i];
        for (let i = 0; i < n; i++) {
            min = Math.min(
                min,
                Math.max(landStartTime[i], firstFinish) + landDuration[i]
            );
        }
    }

    return min;
}