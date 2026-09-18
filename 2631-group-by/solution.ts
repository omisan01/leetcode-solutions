// Solution: Group By
// Runtime: 121 ms | Memory: 79.8 MB

interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    const obj = {};

    for(const item of this){
        const key = fn(item);
        if(!obj.hasOwnProperty(key)){
            obj[key] = []    
        }
        obj[key].push(item);
    }

    return obj
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */