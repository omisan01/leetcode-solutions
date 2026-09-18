// Solution: Digit Frequency Score
// Runtime: 0 ms | Memory: 58 MB

function digitFrequencyScore(n: number): number {
    let result = 0;
    while(n > 0){
        const lastDigit = n % 10;
        result += lastDigit
        n = Math.floor(n / 10)
    }

    return result
};