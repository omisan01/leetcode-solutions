// Solution: Sqrt(x)
// Runtime: 1 ms | Memory: 57.9 MB

function mySqrt(x: number): number {
    if(x <= 1 ) return x;
    let left = 0;
    let right =  Math.floor(x / 2);

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;
        if(square === x){
            return mid
        } else if(square > x ){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    
    return right
};
