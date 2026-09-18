// Solution: Group Anagrams
// Runtime: 26 ms | Memory: 65.5 MB

function groupAnagrams(strs: string[]): string[][] {
    const charMap = new Map();
    const aCode = "a".charCodeAt(0)

    for(const str of strs){
        const charArr = new Array(26).fill(0);
        for(const char of str){
            charArr[char.charCodeAt(0) - aCode]++
        }
        const key = charArr.join(",")

        if(charMap.has(key)){
            const prevStr = charMap.get(key)
            charMap.set(key, [...prevStr,str])
        } else {
            charMap.set(key, [str])
        }
    }

    return [...charMap.values()]

};