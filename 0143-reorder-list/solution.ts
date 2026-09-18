// Solution: Reorder List
// Runtime: 3 ms | Memory: 65.8 MB

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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    let secondHead = slow.next;
    slow.next = null;
    let prev = null
    while(secondHead !== null){
        let front = secondHead.next;
        secondHead.next = prev;
        prev = secondHead
        secondHead = front;
    }

    slow = head
    fast = prev
    while(fast !== null){
        let temp1 = slow.next;
        let temp2 = fast.next
        slow.next = fast;
        fast.next = temp1;
        slow = temp1;
        fast = temp2
    }

    
};