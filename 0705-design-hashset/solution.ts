// Solution: Design HashSet
// Runtime: 21 ms | Memory: 67.6 MB

class MyHashSet {
  private size: number;
  private buckets: number[][];

  constructor() {
    this.size = 1000;
    this.buckets = new Array(this.size).fill(null).map(() => []);
  }

  private hash(key: number): number {
    return key % this.size;
  }

  add(key: number): void {
    const index = this.hash(key);

    if (!this.buckets[index]?.includes(key)) {
      this.buckets[index]?.push(key);
    }
  }

  remove(key: number): void {
    const index = this.hash(key);

    const arrayIndex = this.buckets[index]?.indexOf(key) ?? -1;
    if (arrayIndex > -1) {
      this.buckets[index]?.splice(arrayIndex, 1); 
    }
  }

  contains(key: number): boolean {
    const index = this.hash(key);
    return this.buckets[index]?.includes(key) ?? false;
  }
}


/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */