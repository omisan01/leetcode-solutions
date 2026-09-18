// Solution: Koko Eating Bananas
// Runtime: 8 ms | Memory: 59.6 MB

function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);
    let min = 0;

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        let totalHours = 0;
        for(let i = 0; i < piles.length; i++){
            totalHours += Math.ceil(piles[i] / mid);
        }
        if(totalHours <= h){
            min = mid;
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return min
};