// Solution: Set Mismatch
// Runtime: 14 ms | Memory: 65 MB

function findErrorNums(nums: number[]): number[] {
    let seen = new Set();
    let duplicateNum = 0;
    for(let num of nums){
        if(seen.has(num)){
            duplicateNum = num
        }
        seen.add(num)
    }

    for(let i = 1; i <= nums.length; i++){
        if(!seen.has(i)){
            return [duplicateNum, i]
        }
    }

    return [];
  
};