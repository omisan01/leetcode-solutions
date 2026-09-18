// Solution: Decode String
// Runtime: 0 ms | Memory: 55.2 MB

function decodeString(s: string): string {
    const stack = [];
    let currentNum = 0;
    let currentString = "";
    for (let char of s) {
        if (!isNaN(Number(char))) {
            currentNum = currentNum * 10 + Number(char)
        } else if (char === "[") {
            stack.push([currentNum, currentString])
            currentNum = 0;
            currentString = ""
        } else if (char === "]") {
            const poppedItem = stack.pop();
            currentString =poppedItem[1] + currentString.repeat(poppedItem[0])
        } else {
            currentString += char
        }
    }
    return currentString

};