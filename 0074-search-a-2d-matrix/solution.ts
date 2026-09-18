// Solution: Search a 2D Matrix
// Runtime: 0 ms | Memory: 55.6 MB

function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = m * n - 1

    while(left <= right){
        const mid = Math.floor((left + right) / 2)

        const row = Math.floor(mid / n)
        const col = mid % n

        if(matrix[row][col] === target){
            return true
        }

        if(matrix[row][col] > target){
            right = mid - 1
        } else {
            left = mid + 1
        }

    }

    return false
    
};