// Solution: Total Waviness of Numbers in Range I
// Runtime: 10 ms | Memory: 56.8 MB

function totalWaviness(num1: number, num2: number): number {
    let res = 0;
    if (num2 < 100) return 0;
    for (let i = num1; i <= num2; i++) { 
        if (i < 100) continue;
        let curr = i 
        let next = curr % 10;  
        curr = Math.floor(curr / 10)
        while (curr >= 10) { 
            const lastDigit = curr % 10; 
            const prev = Math.floor(curr / 10) % 10;
            const isValley = prev > lastDigit && next > lastDigit
            const isPeak = prev < lastDigit && next < lastDigit
            if (isPeak || isValley) res++
            next = lastDigit;
            curr = Math.floor(curr / 10)
        }
    }

    return res
};