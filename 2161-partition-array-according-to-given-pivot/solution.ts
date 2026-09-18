// Solution: Partition Array According to Given Pivot
// Runtime: 13 ms | Memory: 90 MB

function pivotArray(nums: number[], pivot: number): number[] {
    let small = [];
    let equal = [];
    let big = []
    for(let num of nums){
        if(num < pivot){
            small.push(num)
        } else if(num === pivot) {
            equal.push(num)
        } else {
            big.push(num)
        }
    }

    return small.concat(equal, big)

};