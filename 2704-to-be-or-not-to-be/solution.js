// Solution: To Be Or Not To Be
// Runtime: 53 ms | Memory: 54 MB

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (arg) => {
            if(arg===val) return true
            throw new Error("Not Equal")
        },
        notToBe: (arg) =>{
            if(arg!==val) return true
            throw new Error("Equal")
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */