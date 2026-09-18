// Solution: Baseball Game
// Runtime: 1 ms | Memory: 56.5 MB

function calPoints(operations: string[]): number {
    const stack: number[] = [];
    let result = 0;
    for (const operation of operations) {
        if (operation === "+") {
            const top = stack.pop();
            const newTop = top + stack[stack.length - 1];
            stack.push(top);
            stack.push(newTop);
            result += newTop
        } else if (operation === "C") {
            result -= stack[stack.length - 1];
            stack.pop();
        } else if (operation === "D") {
            const newTop = 2 * stack[stack.length - 1]
            stack.push(newTop);
            result += newTop
        } else {
            stack.push(parseInt(operation))
            result += parseInt(operation)
        }
    }
    return result
};