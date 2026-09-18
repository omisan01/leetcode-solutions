// Solution: Online Stock Span
// Runtime: 38 ms | Memory: 73 MB

class StockSpanner {
    private stack;
    constructor() {
        this.stack = []
    }

    // [{100 : 1}, {80 : 1}, {75 : 4} ]

    next(price: number): number {
        let span = 1
        while(this.stack.length > 0 && price >= this.stack[this.stack.length - 1][0]){
           const popped = this.stack.pop();
            span += popped[1]
        }
        this.stack.push([price,span]);
        return span
       
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */