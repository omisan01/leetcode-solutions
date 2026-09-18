// Solution: Reverse Integer
// Runtime: 52 ms | Memory: 57.5 MB

function reverse(x: number): number {
    const isNegative = x < 0;
    let num = Math.abs(x);
    let res = 0

    while (num > 0) {
        let lastDigit = num % 10;
        res = res * 10 + lastDigit;

        num = Math.floor(num / 10)
    }

    if (res < -2147483648 || res > 2147483647) {
        return 0;
    }

    return isNegative ? -res : res
};