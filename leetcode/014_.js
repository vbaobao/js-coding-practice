/* Given the head of a sorted linked list, delete all duplicates such that
 * each element appears only once. Return the linked list sorted as well.
 *
 * I wrote this function as a purefunction. Memory difference in returning
 * a new linked list does not see mto affect performance.
 */

let deleteDuplicates = function(head) {
  let result = null;
  let node = head;
  let resNode = null;
  while (node) {
    if (!result) {
      result = new ListNode(node.val);
      resNode = result;
    } else if (resNode.val !== node.val) {
      resNode.next = new ListNode(node.val);
      resNode = resNode.next;
    }
    node = node.next;
  }
  return result;
};