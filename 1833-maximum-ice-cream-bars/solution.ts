// Solution: Maximum Ice Cream Bars
// Runtime: 45 ms | Memory: 76 MB

function maxIceCream(costs: number[], coins: number): number {
    let max = 0;

    for(let cost of costs){
        if(cost > max){
            max = cost
        }
    }
 
    let sorted = new Array(max + 1).fill(0);

    for(let cost of costs){
        sorted[cost]++
    }

    for(let i = 1; i <= max; i++){
        sorted[i] += sorted[i - 1]
    }

    const sortedCosts = new Array(costs.length);
    for(let i = costs.length - 1; i >= 0; i--){
        const val = costs[i];
        sortedCosts[sorted[val] - 1] = val;
        sorted[val]-- 
    }

    let res = 0;
    for(let cost of sortedCosts) {
        if( cost > coins){
            return res
        }
        coins -= cost
        res += 1
    }


    return res
};