// Solution: Palindrome Number
// Runtime: 4 ms | Memory: 62.7 MB

function isPalindrome(x: number): boolean {
    if(x < 0) return false;
    let num = x
    let rev = 0;
    while(num > 0){
        let lastDigit = num % 10;
        rev = rev * 10 + lastDigit
        num = Math.floor(num / 10)
    }

    return x === rev || x === Math.floor(rev / 10);
};