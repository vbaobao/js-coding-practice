/* Given the head of a linked list and an integer val,
 * remove all the nodes of the linked list that has
 * Node.val == val, and return the new head.
 */

let removeElements = function(head, val) {
  // iterate through nodes until node.next = null
  // if node.next match val, then set node.next to node.next.next
  if (head === null) return head;
  let prev = head;
  let node = head;
  while (node) {
    if (node.val === val && node === head) {
      head = head.next;
      node = head;
      prev = head;
    } else if (node.val === val) {
      node = node.next;
      prev.next = node;
    } else {
      prev = node;
      node = node.next;
    }
  }
  return head;
};