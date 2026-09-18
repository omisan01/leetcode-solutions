// Solution: Reverse Vowels of a String
// Runtime: 6 ms | Memory: 58.9 MB

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
     const vowels = "aeiouAEIOU";
    
    let left = 0;
    let right = s.length - 1;
    const arr = s.split('');
    
    while(left < right){
        while(left < right && !vowels.includes(arr[left])){
            left++
        }
        
        while(left < right && !vowels.includes(arr[right])){
            right--
        }
        
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
    }

    return arr.join('')
};