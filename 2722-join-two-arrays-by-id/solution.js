// Solution: Join Two Arrays by ID
// Runtime: 269 ms | Memory: 102.4 MB

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let map = {}
    for(let x of arr1){
        map[x.id] = {...x}
    }

    for(let y of arr2){
        if(map[y.id]){
            map[y.id] = {...map[y.id],...y }
        } else {
            map[y.id] = {...y}
        }
    }

    return Object.values(map)
    
};