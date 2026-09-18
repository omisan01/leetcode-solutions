// Solution: Valid Binary Strings With Cost Limit
// Runtime: 167 ms | Memory: 62.6 MB

function generateValidStrings(n: number, k: number): string[] {
    let res = [];
    for (let num = 0; num < Math.pow(2, n); num++) {
        const validBinary = num.toString(2).padStart(n, "0");

        if (validBinary.includes("11")) continue;

        let cost = 0;
        for (let i = 0; i < n; i++) {
            if (validBinary[i] === "1") {
                cost += i;
            }
        }
        if (cost <= k) res.push(validBinary);
    }
    return res;
}
