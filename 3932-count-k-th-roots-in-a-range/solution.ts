// Solution: Count K-th Roots in a Range
// Runtime: 1 ms | Memory: 57.8 MB

function countKthRoots(l: number, r: number, k: number): number {
    if(k === 1) return r - l + 1
    let count = 0
    for(let i = 0; i < 31623; i++){
        let pow = Math.pow(i,k)
        if(pow <= r && pow >= l){
            count++
        } else if (pow > r) {
            break
        }
    }

    return count
};