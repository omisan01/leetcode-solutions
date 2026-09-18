// Solution: Execute Asynchronous Functions in Parallel
// Runtime: 58 ms | Memory: 55.1 MB

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        let unresolvedCount = functions.length;
        let res = new Array(unresolvedCount);
        functions.forEach(async (func, index) => {
             func().then((val) => {
                unresolvedCount--;
                res[index] = val

                if(unresolvedCount === 0){
                    resolve(res)
                }
             }).catch(reject)
        })
    })

};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */