// Solution: Evaluate Reverse Polish Notation
// Runtime: 7 ms | Memory: 59.7 MB

function evalRPN(tokens: string[]): number {
    const stack = [];

    for (const token of tokens) {
        if (token !== "+" && token !== "-" && token !== "*" && token !== "/") {
            stack.push(Number(token))
        } else {
            const lastNum = stack.pop();
            const secondLastNum = stack.pop();
            if (token === "+") {
                stack.push(lastNum + secondLastNum);
            } else if (token === "-") {
                stack.push(secondLastNum - lastNum)
            } else if (token === "*") {
                stack.push(lastNum * secondLastNum)
            } else {
                stack.push(Math.trunc(secondLastNum / lastNum));
            }
        }

    }

    return stack.pop()
};