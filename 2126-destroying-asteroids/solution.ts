// Solution: Destroying Asteroids
// Runtime: 83 ms | Memory: 70.4 MB

function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
    asteroids.sort((a, b) => a - b);
    for(let i = 0; i < asteroids.length; i++ ){
        if(mass < asteroids[i]){
            return false;
        }
        mass += asteroids[i]
    }

    return true
};