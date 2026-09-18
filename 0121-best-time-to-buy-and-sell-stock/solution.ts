// Solution: Best Time to Buy and Sell Stock
// Runtime: 2 ms | Memory: 66 MB

function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let start = 0;
    let end = 1;

    while(end < prices.length){
        if(prices[start] < prices[end]){
            maxProfit = Math.max(maxProfit , prices[end] - prices[start]);
        } else {
            start = end
        }
        end++
    }
  
    return maxProfit;
};