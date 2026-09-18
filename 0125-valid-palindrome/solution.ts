// Solution: Valid Palindrome
// Runtime: 1 ms | Memory: 58.5 MB

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
   while(left < right && !isAlphanumeric(s[left])){
    left++;
   }

   while(right > left && !isAlphanumeric(s[right])){
    right--;
   }
    if (
      s[left]?.toLocaleLowerCase() !==
      s[right]?.toLocaleLowerCase()
    ) {
      return false;
    }
    left++;
    right--
  }

  return true;
}

function isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }