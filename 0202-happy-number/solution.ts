// Solution: Happy Number
// Runtime: 0 ms | Memory: 55.3 MB

function isHappy(n: number): boolean {
    if(n === 1) return true;

    let slow = getSum(n);
    let fast = getSum(getSum(n));

    while(fast !== 1 && slow !== fast){
        slow = getSum(slow);
        fast = getSum(getSum(fast))
    }

    if(fast !== 1) return false

    return true
};

function getSum(n : number) : number{
    let sum = 0;
    while(n > 0){
        let lastDigit = n % 10;
        sum += lastDigit * lastDigit;
        n = Math.floor(n / 10)
    }
    return sum;
} 