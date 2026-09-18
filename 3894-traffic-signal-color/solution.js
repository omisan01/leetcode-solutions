// Solution: Traffic Signal Color
// Runtime: 0 ms | Memory: 55.1 MB

/**
 * @param {number} timer
 * @return {string}
 */
var trafficSignal = function(timer) {
    if(timer === 0){
        return "Green"
    } else if (timer === 30){
        return "Orange"
    } else if(timer > 30 && timer <= 90 ){
        return "Red"
    } else {
        return "Invalid"
    }
};