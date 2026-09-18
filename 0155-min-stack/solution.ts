// Solution: Min Stack
// Runtime: 6 ms | Memory: 66.2 MB

class MinStack {
    private minStack;
    private mainStack;

    constructor() {
        this.minStack = []; // [-2 , -2, -1]
        this.mainStack = []; // [-2 , 0, -1]
    }

    push(val: number): void {
        this.mainStack.push(val);
        if (
            this.minStack.length === 0 ||
            val <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        if(this.mainStack[this.mainStack.length - 1] === this.minStack[this.minStack.length - 1]){
            this.minStack.pop()
        }
        this.mainStack.pop();
    }

    top(): number {
        return this.mainStack[this.mainStack.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */