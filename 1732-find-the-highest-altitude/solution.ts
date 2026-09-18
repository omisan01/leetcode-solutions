// Solution: Find the Highest Altitude
// Runtime: 0 ms | Memory: 54.3 MB

function largestAltitude(gain: number[]): number {
    let highest = 0;
    let sum = 0;

    for(let i of gain){
        sum += i

        highest = Math.max(sum, highest)
    }

    return highest
};