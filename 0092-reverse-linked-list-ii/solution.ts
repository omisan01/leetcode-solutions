// Solution: Reverse Linked List II
// Runtime: 0 ms | Memory: 56 MB

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let leftPrev = dummy;
    let l = head;
    let count = 0;
    while(count < left - 1){
        leftPrev = leftPrev.next;
        l = l.next
        count++
    }

    const leftNode = l;
    let prev = null;
    for(let i = 0; i < right - left + 1 ; i++){
        let tempNext = l.next;
        l.next = prev;
        prev = l;
        l = tempNext
    }

    leftNode.next = l;
    leftPrev.next = prev

    return dummy.next;
};