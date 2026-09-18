// Solution: Minimum Window Substring
// Runtime: 33 ms | Memory: 61.5 MB

function minWindow(s: string, t: string): string {
    if (t.length > s.length || t === "") return "";

    const tMap = new Map();
    const window = new Map();
    let minSubstring = '';

    for (let char of t) {
        if (tMap.has(char)) {
            tMap.set(char, tMap.get(char) + 1)
        } else {
            tMap.set(char, 1)
        }
    }

    const need = tMap.size;
    let have = 0;
    let left = 0
    let resultIndices = [-1, -1];
    let resultLength = Infinity;


    for (let right = 0; right < s.length; right++) {
        let currentChar = s[right];

        if (window.has(currentChar)) {
            window.set(currentChar, window.get(currentChar) + 1)
        } else {
            window.set(currentChar, 1)
        }

        if (tMap.has(currentChar) && window.get(currentChar) === tMap.get(currentChar)) {
            have++;
        }

        while (have === need) {
            if (right - left + 1 < resultLength) {
                resultIndices = [left, right];
                resultLength = right - left + 1;
            }

            // Decrement the left most char
            window.set(s[left], window.get(s[left]) - 1);
            if (tMap.has(s[left]) && window.get(s[left]) < tMap.get(s[left])) {
                have--;
            }
            left++;

        }

    }
    return resultLength === Infinity ? "" : s.slice(resultIndices[0], resultIndices[1] + 1);
};