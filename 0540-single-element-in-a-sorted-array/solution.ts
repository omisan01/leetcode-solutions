// Solution: Single Element in a Sorted Array
// Runtime: 0 ms | Memory: 59.2 MB

function singleNonDuplicate(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) return nums[mid]
        const isEven = mid % 2 === 0;  
        if((isEven && nums[mid] === nums[mid + 1]) || (!isEven && nums[mid] === nums[mid - 1])){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1;
};