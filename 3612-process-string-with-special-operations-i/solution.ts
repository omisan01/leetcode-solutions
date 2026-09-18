// Solution: Process String with Special Operations I
// Runtime: 1 ms | Memory: 65.1 MB

function processStr(s: string): string {
    let res = "";
    for (let char of s) {
        switch (char) {
            case '#':
                res += res
                break;
            case '*':
                res = res.slice(0, -1);
                break;
            case "%":
                let rev = "";
                for (let i = res.length - 1; i >= 0; i--) {
                    rev += res[i]
                }
                res = rev
                break
            default:
                res += char
                break;
        }
    }

    return res
};