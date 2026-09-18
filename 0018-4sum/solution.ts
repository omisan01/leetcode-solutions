// Solution: 4Sum
// Runtime: 15 ms | Memory: 59.2 MB

function fourSum(nums: number[], target: number): number[][] {
    nums = nums.sort((a, b) => a - b);
    let result = [];

    for(let i = 0; i < nums.length - 3; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        for(let j = i + 1; j < nums.length - 2; j++){
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            let left = j + 1;
            let right = nums.length - 1;

            while(left < right){
                const total = nums[i] + nums[j] + nums[left] + nums[right];

                if(total === target){
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    left++;
                    right--;

                while(left < right && nums[left] === nums[left - 1]){
                    left++;
                }

                while(left < right && nums[right] === nums[right + 1]){
                    right--;
                }

                } else if(total > target){
                    right--
                } else {
                    left++
                }

            }
        }
    } 

    return result
};