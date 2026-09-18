// Solution: Count Subarrays With Majority Element I
// Runtime: 41 ms | Memory: 59.2 MB

function countMajoritySubarrays(nums: number[], target: number): number {
    let res = 0;

    for(let i = 0; i < nums.length; i++){
        let freq = 0;
        for(let j = i; j < nums.length; j++){
           if(nums[j] === target){
                freq++;
            }

            if(freq > (j - i + 1) / 2){
                res++
            }
        }
    }

    return res
};