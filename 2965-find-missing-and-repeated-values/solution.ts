// Solution: Find Missing and Repeated Values
// Runtime: 1 ms | Memory: 58.8 MB

function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let res = [];
    const size = grid.length * grid.length;
    let arr = new Array(size + 1).fill(0)

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            arr[grid[i][j]]++;
        }
    } 

    for (let num = 1; num <= size; num++) {
        if (arr[num] > 1){
            res[0] = num
        }
         
        if (arr[num] === 0) {
            res[1] = num
        }
    }


    return res
};