// Solution: Design HashMap
// Runtime: 26 ms | Memory: 68.6 MB

class MyHashMap {
  private size: number;
  private buckets: [number, number][][]; // [0 , [[1,2],[2,4]]]

  constructor() {
    this.size = 1000;
    this.buckets = new Array(this.size).fill(null).map(() => []);
  }

  private hash(key: number): number {
    return key % this.size;
  }

  put(key: number, value: number): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket!.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket?.push([key, value]);
  }

  get(key: number): number {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket!.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return -1;
  }

  remove(key: number): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket!.length; i++) {
      if (bucket[i][0] === key) {
        bucket?.splice(i, 1);
      }
    }
  }
}
/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */