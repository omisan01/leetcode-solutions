// Solution: Exactly One Consecutive Set Bits Pair
// Runtime: 0 ms | Memory: 58.3 MB

function consecutiveSetBits(n: number): boolean {
    let binary = n.toString(2);
    let pairs = 0;

    for(let i = 0; i < binary.length - 1; i++){
        if(binary[i] === "1" && binary[i+1] === "1"){
            pairs++
        }
    }

    return pairs === 1
};