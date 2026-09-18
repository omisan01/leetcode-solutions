// Solution: LRU Cache
// Runtime: 86 ms | Memory: 113.8 MB

class CacheNode {
    key: number;
    value: number;
    prev: CacheNode | null = null;
    next: CacheNode | null = null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
    }
}


class LRUCache {
    private readonly capacity: number;
    private readonly map: Map<number, CacheNode>;
    private readonly head: CacheNode;
    private readonly tail: CacheNode;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map<number, CacheNode>();
        this.head = new CacheNode(0, 0);
        this.tail = new CacheNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node: CacheNode): void {
        const prev = node.prev!;
        const next = node.next!;
        prev.next = next;
        next.prev = prev
    }

    insert(node: CacheNode): void {
        const prev = this.tail.prev!;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail
        this.tail.prev = node;
    }

    get(key: number): number {
        const node = this.map.get(key);
        if (!node) {
            return -1;
        }

        this.remove(node);
        this.insert(node);

        return node.value;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            const oldNode = this.map.get(key);
            oldNode.value = value;
            this.remove(oldNode);
            this.insert(oldNode);
            return
        }
        if (this.map.size === this.capacity) {
            this.map.delete(this.head.next.key);
            this.remove(this.head.next);
        }
        const node = new CacheNode(key, value)
        this.map.set(key, node)
        this.insert(node);
    }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */