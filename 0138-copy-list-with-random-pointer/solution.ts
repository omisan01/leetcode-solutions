// Solution: Copy List with Random Pointer
// Runtime: 44 ms | Memory: 57.6 MB

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    const map = new Map();
    map.set(null, null)

    let curr = head;
    while(curr !== null){
        const newNode = new Node(curr.val);
        map.set(curr, newNode);
        curr = curr.next
    }

    curr = head;

    while(curr !== null){
        let copy = map.get(curr);
        copy.next = map.get(curr.next);
        copy.random = map.get(curr.random);
        curr = curr.next
    }

    return map.get(head)

};