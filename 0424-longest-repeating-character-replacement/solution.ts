// Solution: Longest Repeating Character Replacement
// Runtime: 19 ms | Memory: 56.7 MB

function characterReplacement(s: string, k: number): number {
    let maxFreq = 0;
    const map : { [key: string]: number } = {};
    let result = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        map[s[end]] = (map[s[end]] || 0) + 1

        maxFreq = Math.max(maxFreq, map[s[end]]);

        while ((end - start + 1) > k + maxFreq) {
            map[s[start]]--;
            start++;
        }
        result = Math.max(result, end - start + 1)

    }

    return result


};