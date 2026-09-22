// Solution: Majority Element II
// Runtime: 9 ms | Memory: 62.5 MB

function majorityElement(nums: number[]): number[] {
    const map = new Map();
    const majority = Math.floor(nums.length / 3) + 1;
    const res = []

    for (const num of nums){
        if(map.has(num)){
            map.set(num, map.get(num) + 1 )
        } else {
            map.set(num, 1)
        }

        if(map.get(num) === majority){
            res.push(num)
        }
    }

    return res
};