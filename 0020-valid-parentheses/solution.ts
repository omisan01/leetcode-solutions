// Solution: Valid Parentheses
// Runtime: 3 ms | Memory: 56.4 MB

function isValid(s: string): boolean {
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const stack = [];

    for(let i = 0; i < s.length; i++){
        if(stack.length > 0 && stack[stack.length - 1] === bracketMap[s[i]]){
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }

    return stack.length === 0

};