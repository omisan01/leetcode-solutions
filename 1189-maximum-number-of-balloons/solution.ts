// Solution: Maximum Number of Balloons
// Runtime: 3 ms | Memory: 58.3 MB

function maxNumberOfBalloons(text: string): number {
    const map = {b : 0, a: 0, l: 0, o: 0, n:0};

    for(let t of text){
        if(t in map){
           map[t]++
        }
    }

    return Math.min(map['b'], map['a'], Math.floor(map['l'] / 2), Math.floor(map['o'] / 2), map['n']);

};