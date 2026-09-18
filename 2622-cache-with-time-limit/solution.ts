// Solution: Cache With Time Limit
// Runtime: 56 ms | Memory: 53.5 MB

class TimeLimitedCache {
    private cache;
    constructor() {
        this.cache = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {
        let exists = this.cache.has(key);
        if(exists){
            clearTimeout(this.cache.get(key).ref)
        }
        this.cache.set(key, {
            value,
            ref : setTimeout(() => {
                this.cache.delete(key)
            }, duration)
        })

        return exists
    }
    
    get(key: number): number {
        if(this.cache.has(key)){
            return this.cache.get(key).value
        } else {
            return -1
        }
    }
    
    count(): number {
        return this.cache.size
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */