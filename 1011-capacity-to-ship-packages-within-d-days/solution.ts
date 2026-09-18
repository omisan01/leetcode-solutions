// Solution: Capacity To Ship Packages Within D Days
// Runtime: 12 ms | Memory: 60.9 MB

function shipWithinDays(weights: number[], days: number): number {
  let left = 1;
  let right = 1;

  for(const num of weights){
    right += num
    left = Math.max(num, left)
  }

  let result = 1

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        let requiredDays = 1;
        let load = 0
        for(let weight of weights){
            if(load + weight > mid){
                requiredDays++;
                load = 0
            }
            load += weight
        }

        if(requiredDays <= days){
            result = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    
    }

    return result
};