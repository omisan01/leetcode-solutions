// Solution: Daily Temperatures
// Runtime: 12 ms | Memory: 78.8 MB

function dailyTemperatures(temperatures: number[]): number[] {
    let stack = [];
    let result = new Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++){
        while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]){
            const poppedIndex = stack.pop()
            result[poppedIndex] = i - poppedIndex;
        }

        stack.push(i)
    }

    return result
};