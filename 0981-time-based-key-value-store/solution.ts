// Solution: Time Based Key-Value Store
// Runtime: 46 ms | Memory: 103.6 MB

class TimeMap {
    private map;
    constructor() {
        this.map = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        const values = [timestamp, value]
        const prev = this.map.get(key) ?? [];
        prev.push(values)
        this.map.set(key, prev)
    }

    get(key: string, timestamp: number): string {
        const values = this.map.get(key) ?? [];
        if(values.length === 0){
            return ""
        }

        let left = 0;
        let right = values.length - 1;
        let res = ""

        while(left <= right){
            const mid = Math.floor((left + right) / 2);
            if(values[mid][0] <= timestamp){
                res = values[mid][1]
                left = mid + 1
            }  else {
                right = mid - 1
            }
        }

        return res
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */