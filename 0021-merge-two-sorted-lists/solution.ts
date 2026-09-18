// Solution: Merge Two Sorted Lists
// Runtime: 0 ms | Memory: 58.8 MB

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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(-10);
    let prev = dummy;
    let curr1 = list1;
    let curr2 = list2;

    while(curr1 && curr2){
        if(curr1.val <= curr2.val){
            prev.next = curr1;
            curr1 = curr1.next
        } else {
            prev.next = curr2;
            curr2 = curr2.next
        }
            prev = prev.next;
    }

    if(curr1) {
        prev.next = curr1
    } else {
        prev.next = curr2
    }

    return dummy.next
};