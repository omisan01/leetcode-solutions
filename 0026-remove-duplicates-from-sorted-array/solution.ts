// Solution: Remove Duplicates from Sorted Array
// Runtime: 0 ms | Memory: 58.6 MB

function removeDuplicates(nums: number[]): number {
let index = 1;
for(let i = 1 ; i < nums.length; i++){
    if(nums[i] !== nums[i - 1]){
        nums[index] = nums[i];
        index++
    }
}
return index;
}
