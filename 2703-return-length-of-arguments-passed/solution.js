// Solution: Return Length of Arguments Passed
// Runtime: 46 ms | Memory: 54.5 MB

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return arguments.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */