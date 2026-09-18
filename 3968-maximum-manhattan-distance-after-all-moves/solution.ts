// Solution: Maximum Manhattan Distance After All Moves
// Runtime: 22 ms | Memory: 59.3 MB

function maxDistance(moves: string): number {
    let x = 0, y = 0;
    let extra = 0;
    for(let i of moves){
        switch(i){
            case 'L':
                x -= 1
                break;
            case 'R':
                x += 1
                break;
            case 'U':
                y += 1
                break;
            case 'D':
                y -= 1
                break;
            default:
                extra++
        } 
    }

    return Math.abs(x) + Math.abs(y) + extra
};