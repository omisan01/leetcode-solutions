// Solution: Sum of Integers with Maximum Digit Range
// Runtime: 2 ms | Memory: 57.8 MB

function maxDigitRange(nums: number[]): number {
    let sum = 0
    let maxRange = 0
    for(let i = 0; i < nums.length; i++){
        let smallest = 9;
        let largest = 0
        let num = nums[i]
        
        while(num > 0){
            let lastDigit = num % 10
            largest = Math.max(lastDigit, largest);
            smallest= Math.min(lastDigit, smallest)
            num = Math.floor(num / 10)
        }
        

        let range = largest - smallest
        if(maxRange < range){
            maxRange = range;
            sum = nums[i]
        } else if(maxRange === range){
            sum += nums[i]
        }
    }

    return sum
};