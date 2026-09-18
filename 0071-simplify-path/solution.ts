// Solution: Simplify Path
// Runtime: 1 ms | Memory: 57.6 MB

function simplifyPath(path: string): string {
    let splittedPath = path.split("/");
    const stack = [];

    for (let char of splittedPath) {
        if (char === "..") {
            if (stack.length > 0) {
                stack.pop()
            }
        } else if (char === "" || char === ".") {
            continue;
        } else {
            stack.push(char)
        }
    }

    return stack.length > 0 ? "/" + stack.join("/") : "/"
};