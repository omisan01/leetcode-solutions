// Solution: Maximum Product Subarray
// Time: 6 ms (20.13%) | Memory: 58.3 MB (30.35%)

function maxProduct(nums: number[]): number {
    let currMax = 1;
    let currMin = 1;
    let res = Math.max(...nums)
    if(nums.length === 1) return nums[0]
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