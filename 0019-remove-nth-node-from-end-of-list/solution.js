// Solution: Remove Nth Node From End of List
// Time: 0 ms (100.00%) | Memory: 53.9 MB (78.41%)

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
    let dummy = head;

    let len = 0;
    while(dummy !== null){
        len++;
        dummy = dummy.next
    }

    const indexToRemove = len - n;

    if(indexToRemove === 0) return head.next;
    dummy = head;
    
    for(let i = 0; i < len - 1; i++){
        if(i + 1 === indexToRemove){
            dummy.next = dummy.next.next
            break
        }

        dummy = dummy.next

    } 

    return head
    
};