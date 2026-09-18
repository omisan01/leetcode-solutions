// Solution: Implement Stack using Queues
// Runtime: 0 ms | Memory: 55.8 MB

class MyStack {
    private queue;
    constructor() {
        this.queue = [];
    }

    push(x) {
        this.queue.push(x);

        // Rotate elements so that the last pushed comes to front [ 1 , 2 ]
        for (let i = 0; i < this.queue.length - 1; i++) {
            const firstElement = this.queue.shift();
            this.queue.push(firstElement)
        }
    }

    pop() {
        return this.queue.shift();
    }

    top() {
        return this.queue[0];
    }

    empty() {
        return this.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */