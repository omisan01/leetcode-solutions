// Solution: Delete the Middle Node of a Linked List
// Runtime: 13 ms | Memory: 98.4 MB

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

function deleteMiddle(head: ListNode | null): ListNode | null {
if(head.next === null){
    return null
}
    
    let dummy = new ListNode(0,head);
    let slow = head;
    let fast = head;

    while(fast != null && fast.next !== null) {
        dummy = slow
        slow = slow.next
        fast = fast.next.next
    }

    dummy.next = slow.next
    return head
};