// Solution: Check Good Integer
// Runtime: 3 ms | Memory: 57.7 MB

function checkGoodInteger(n: number): boolean {
    let digitSum = 0;
    let squareSum = 0;

    while(n > 0){
        let last = Math.floor(n % 10)
        digitSum += last
        squareSum += last * last
        n = n / 10
    }

    return squareSum - digitSum >= 50
};