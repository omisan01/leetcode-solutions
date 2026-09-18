// Solution: How Many Numbers Are Smaller Than the Current Number
// Runtime: 5 ms | Memory: 58.7 MB

function smallerNumbersThanCurrent(nums: number[]): number[] {
    let sortedArr = [...nums].sort((a, b) => a - b); 
    let map = new Map(); 

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(sortedArr[i])) {
            map.set(sortedArr[i], i)
        }
    }

    let res = [];
    for(let num of nums){
        res.push(map.get(num))
    }

    return res
};