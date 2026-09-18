// Solution: Reverse String
// Runtime: 0 ms | Memory: 62.2 MB

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--
    }
};