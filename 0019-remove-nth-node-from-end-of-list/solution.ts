// Solution: Remove Nth Node From End of List
// Runtime: 0 ms | Memory: 57.8 MB

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
   let len = 0;
   let curr = head;
   while(curr !== null){
    len++;
    curr = curr.next
   }

    curr = head
    if(len === n){
       head = head.next
       return head
    }
    let steps = 0
   while(steps !== (len - n) - 1){
    curr = curr.next
    steps++
   }
   curr.next = curr.next.next

   return head

};