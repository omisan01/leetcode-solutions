// Solution: Maximum Product Subarray
// Time: 1 ms (85.62%) | Memory: 58.1 MB (33.55%)

function maxProduct(nums: number[]): number {
    let currMax = 1;
    let currMin = 1;
    let res = Math.max(...nums)
    for(let num of nums){
        if(num === 0){
            currMax = 1;
            currMin = 1
            continue;
        }
    const prevMax = num * currMax 
       currMax = Math.max(num * currMax, num * currMin, num );
       currMin = Math.min(prevMax, num * currMin, num );

       res = Math.max(res, currMax)
    } 

    return res
};