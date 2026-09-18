// Solution: Split Array Largest Sum
// Runtime: 6 ms | Memory: 58.2 MB

function splitArray(nums: number[], k: number): number {
    let left = 0;
    let right = 0;

    for (const num of nums) {
        right += num
        left = Math.max(num, left)
    }

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let currSum = 0;
        let subarrayCount = 0;
        let isValid = true
        for (let num of nums) {
            if (mid >= currSum + num) {
                currSum += num;
            } else {
                if (subarrayCount === k - 1) {
                    isValid = false;
                    break;
                }
                currSum = num;
                subarrayCount++;
            }

        }

        if (isValid) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
};