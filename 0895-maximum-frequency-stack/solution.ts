// Solution: Maximum Frequency Stack
// Runtime: 62 ms | Memory: 78.9 MB

class FreqStack {
    private group;
    private maxFreq;
    private freqMap;
    constructor() {
        this.freqMap = new Map();
        this.group = [];
        this.maxFreq = 0;
    }

    push(val: number): void {
        if(this.freqMap.has(val)){
            this.freqMap.set(val, this.freqMap.get(val) + 1)
        } else {
            this.freqMap.set(val, 1)
        }
        this.maxFreq = Math.max(this.freqMap.get(val), this.maxFreq);
        if (!this.group[this.freqMap.get(val)]) this.group[this.freqMap.get(val)] = [];
        this.group[this.freqMap.get(val)].push(val)

    }

    pop(): number {
        const maxFreqNum = this.group[this.maxFreq].pop();
        this.freqMap.set(maxFreqNum , this.freqMap.get(maxFreqNum) - 1);
        if(this.group[this.maxFreq].length === 0){
            this.maxFreq--
        }
        return maxFreqNum
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */