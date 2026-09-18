// Solution: Find K Closest Elements
// Runtime: 0 ms | Memory: 62.8 MB

function findClosestElements(arr: number[], k: number, x: number): number[] {
    let left = 0;
    let right = arr.length - 1;

    while(right - left + 1 > k ){
        if(x - arr[left] <= arr[right] - x){
            right--
        } else {
            left++
        }
    }

    return arr.slice(left, right + 1)

};