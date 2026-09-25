// Solution: Remove Nth Node From End of List
// Time: 0 ms (100.00%) | Memory: 54.4 MB (51.67%)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head) return [];
    let dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;

    while(n > 0){
        right = right.next;
        n--
    }

    while(right !== null){
        right = right.next;
        left = left.next
    }

    left.next = left.next.next

    return dummy.next
    
};