// Solution: Concatenate Non-Zero Digits and Multiply by Sum II
// Runtime: 502 ms | Memory: 98.2 MB

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function (s, queries) {
    let res = [];
    const MOD = 1000000007n;
    const prefixSum = new Array(s.length + 1).fill(0n);
    const prefX = new Array(s.length + 1).fill(0n);
    const countNonZero = new Array(s.length + 1).fill(0);
    const power10 = new Array(s.length + 1);
    power10[0] = 1n;
    for (let i = 1; i <= s.length; i++) {
        power10[i] = (power10[i - 1] * 10n) % MOD;
    }

    let currNonDig = 0n;
    let count = 0
    for(let i = 0; i < s.length; i++){
        prefixSum[i + 1] = prefixSum[i] + BigInt(s[i]);
        if(s[i] !== "0"){
            currNonDig = (currNonDig * 10n + BigInt(s[i])) % MOD;
            count++
        }
        prefX[i + 1] = currNonDig;
        countNonZero[i + 1] = count
    }

    for(let [l,r] of queries){
        let totalSum = prefixSum[r + 1] - prefixSum[l];
        let k = countNonZero[r + 1] - countNonZero[l];
        let tenthPower = power10[k];

        let x = (prefX[r + 1] - (prefX[l] * tenthPower) % MOD + MOD) % MOD;
        
        let ans = (x * totalSum) % MOD;
        res.push(Number(ans)) 
    }
    
    return res
};
