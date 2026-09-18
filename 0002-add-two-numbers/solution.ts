// Solution: Add Two Numbers
// Runtime: 2 ms | Memory: 61.9 MB

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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let curr1 = l1;
    let curr2 = l2;
    let res = 0;
    let carry = 0
    let dummy = new ListNode()
    let tail = dummy

    while(curr1 !== null || curr2 !== null || carry){
        const v1 = curr1 ? curr1.val : 0
        const v2 = curr2 ? curr2.val : 0
        const sum = v1 + v2 + carry;
        const lastDigit = sum % 10
        carry = Math.floor(sum / 10)
        tail.next = new ListNode(lastDigit);
        tail = tail.next
       
        curr1 = curr1 ? curr1.next : null
        curr2 = curr2 ? curr2.next : null

    }

    return dummy.next
};