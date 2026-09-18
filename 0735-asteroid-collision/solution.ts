// Solution: Asteroid Collision
// Runtime: 1 ms | Memory: 57.9 MB

function asteroidCollision(asteroids: number[]): number[] {
    const stack = [];
    for(const asteroid of asteroids){
        let isDead = false
        while(stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0){
            if(stack[stack.length - 1] < Math.abs(asteroid)){
                stack.pop();
                continue;
            } else if (stack[stack.length - 1] === Math.abs(asteroid)){
                stack.pop();
                isDead = true;
                break;
            } else{
                isDead = true
                break;
            }
        }
        if(!isDead){
            stack.push(asteroid)
        }
    }

    return stack
};