// Solution: Car Fleet
// Runtime: 194 ms | Memory: 94.7 MB

function carFleet(target: number, position: number[], speed: number[]): number {
    const cars = position.map((p, i) => [p, speed[i]]);
    cars.sort((a, b) => b[0] - a[0])

    const stack = []

    for(let i = 0; i < cars.length; i++){
        const timeTaken = (target - cars[i][0]) / cars[i][1];
        if(stack.length === 0 || timeTaken > stack[stack.length - 1]){
            stack.push(timeTaken)
        } 
    }
    
    return stack.length

};