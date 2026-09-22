// Solution: Majority Element II
// Time: 1 ms (94.12%) | Memory: 60.2 MB (59.66%)

function majorityElement(nums: number[]): number[] {
    let candidate1 = 0;
    let candidate2 = 0;

    let count1 = 0;
    let count2 = 0;

    for (let num of nums) {
        if (num === candidate1) {
            count1++
        } else if (num === candidate2) {
            count2++
        } else if (count1 === 0) {
            candidate1 = num
            count1++
        } else if (count2 === 0) {
            candidate2 = num
            count2++
        } else {
            count1--;
            count2--
        }
    }

    let freq1 = 0;
    let freq2 = 0;

    for(let num of nums){
        if(candidate1 === num){
            freq1++
        } else if(candidate2 === num){
            freq2++
        }
    }

    let res = []
    const majority = Math.floor(nums.length / 3)
    if(freq1 > majority ) res.push(candidate1)
    if(freq2 > majority) res.push(candidate2)

    return res
};