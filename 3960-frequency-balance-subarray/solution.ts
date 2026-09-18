// Solution: Frequency Balance Subarray
// Runtime: 353 ms | Memory: 59.9 MB

function getLength(nums: number[]): number {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        let map = new Map();
        let freqCount = new Map();
        for (let j = i; j < nums.length; j++) {
            const oldFreq = map.get(nums[j]) || 0;
            const newFreq = oldFreq + 1;
            map.set(nums[j], newFreq);
            if (oldFreq > 0) {
                freqCount.set(oldFreq, freqCount.get(oldFreq) - 1);
                if (freqCount.get(oldFreq) === 0) {
                    freqCount.delete(oldFreq);
                }
            }
            freqCount.set(newFreq, (freqCount.get(newFreq) || 0) + 1);

            if(map.size === 1){
                res = Math.max(res, j - i + 1)
            } else if(freqCount.size === 2){
                 const freq = [...freqCount.keys()]

                if(freq[1] === freq[0] * 2 || freq[0] === freq[1] * 2 ){
                    res = Math.max(res, j - i + 1)
                }
            }
        }
    }

    return res
}
