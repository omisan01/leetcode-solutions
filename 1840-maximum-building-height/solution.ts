// Solution: Maximum Building Height
// Runtime: 298 ms | Memory: 101.4 MB

function maxBuilding(n: number, restrictions: number[][]): number {
    if(restrictions.length === 0){
        return n - 1
    }

    restrictions.push([1,0])

    restrictions = restrictions.sort((a , b) => a[0] - b[0]);

    restrictions.push([n , Number.MAX_SAFE_INTEGER])

    // Left to right pass - to see if all restrictions are possible
    for(let i = 1; i < restrictions.length; i++){
        const [prevBuilding, prevHeight] = restrictions[i - 1];
        const [currBuilding, currHeight] = restrictions[i];

        const distance = currBuilding - prevBuilding;

        restrictions[i][1] = Math.min(currHeight, prevHeight + distance)  
    }

    // Right to left pass - to see if all restrictions are possible from right
    for(let i = restrictions.length - 2; i >= 0; i--){
        const [nextBuilding, nextHeight] = restrictions[i + 1];
        const [currBuilding, currHeight] = restrictions[i];

        const distance = nextBuilding - currBuilding;

        restrictions[i][1] = Math.min(currHeight, nextHeight + distance)  
    }

    let res = 0;

    // Find peak element between neighbouring restrictions 
    for(let i = 1; i < restrictions.length; i++){
        const [prevBuilding, prevHeight] = restrictions[i - 1];
        const [currBuilding, currHeight] = restrictions[i];

        const distance = currBuilding - prevBuilding; 
        const difference = Math.abs(prevHeight - currHeight);

        const peak = Math.max(prevHeight, currHeight) + Math.floor((distance - difference) / 2)

        res = Math.max(res , peak)
        
    }


    // Return highest
    return res

};