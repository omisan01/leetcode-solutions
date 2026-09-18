// Solution: Design Circular Queue
// Runtime: 10 ms | Memory: 66.3 MB

class MyCircularQueue {
    private size;
    private count;
    private head;
    private tail;
    constructor(k: number) {
        this.size = k;
        this.count = 0;
        this.head = new ListNode(0);
        this.tail = this.head;
    }

    enQueue(value: number): boolean {
        if(this.isFull()) return false;
        const newNode = new ListNode(value);

        if(this.isEmpty()){
            this.head.next = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.count++;
        return true
    }

    deQueue(): boolean {
        if(this.isEmpty()) return false;

        this.head.next = this.head.next.next;
        if(this.head.next === null){
            this.tail = this.head
        }

        this.count--;
        return true
    }

    Front(): number {
        if(this.isEmpty()) return -1;

        return this.head.next.val
    }

    Rear(): number {
        if(this.isEmpty()) return -1;

        return this.tail.val
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    isFull(): boolean {
        return this.count === this.size;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */