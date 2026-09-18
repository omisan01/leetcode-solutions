// Solution: Minimum Cost of Buying Candies With Discount
// Runtime: 1 ms | Memory: 56 MB

function minimumCost(cost: number[]): number {
    cost.sort((a,b) => b - a);

    let res = 0;
    let count = 0; 

    for(let i = 0; i < cost.length; i++){
        if(count === 2){
            count = 0;
        } else {
            res += cost[i];
            count += 1
        }
    }

    return res

};