/* Given the head of a singly linked list, reverse the list, and return the reversed list. */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

let reverseList = function(head) {
  if (!head) return head;
  let prev = null;
  let current = head;
  let next =  current.next;
  while (next) {
    current.next = prev;
    prev = current;
    current = next;
    next = next.next;
  }
  current.next = prev;
  return current;
};
