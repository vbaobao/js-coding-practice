/**
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let mergeTwoLists = function(l1, l2) {
  // 2 node holders
  // both are being traversed
  // compare l1 node to l2 node
  // if l1 is less than l2, check next l1 node
  // if l1 is greater, then set prev l1.next to l2
  // continue until end of l1
  let head = null;
  let prev = null;
  let node1 = l1;
  let node2 = l2;
  
  if (!l1 && !l2 || !li) {
    return l1;
  } else if (!l2) {
    return l1;
  } else if (node1.val <= node2.val) {
    prev = node1;
    head = prev;
    node1 = node1.next;
  } else {
    prev = node2;
    head = prev;
    node2 = node2.next;
  }
  
  while (node1 && node2) {
      if (node1.val <= node2.val) {
        prev.next = node1;
        prev = prev.next;
        node1 = node1.next;
      } else {
        prev.next = node2;
        prev = prev.next;
        node2 = node2.next;
      }  
  }
  if (!node1 && !node2) return head;
  if (node1) {
    prev.next = node1;
  } else {
    prev.next = node2;
  }
  return head;
};