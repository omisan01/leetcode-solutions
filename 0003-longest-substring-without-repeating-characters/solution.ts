// Solution: Longest Substring Without Repeating Characters
// Runtime: 4 ms | Memory: 59.7 MB

function lengthOfLongestSubstring(s: string): number {
    let result = 0;
    let charSet = new Set<string>();
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }
        charSet.add(s[end]);
        result = Math.max(result, end - start + 1);
    }

    return result;
}