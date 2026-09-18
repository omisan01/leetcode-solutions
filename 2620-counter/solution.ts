// Solution: Counter
// Runtime: 43 ms | Memory: 55.2 MB

function createCounter(n: number): () => number {
    
    return function() {
        return n++
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */