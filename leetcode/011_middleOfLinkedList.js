/* 
 * Given a non-empty, singly linked list with head node head,
 * return a middle node of linked list.
 *
 * If there are two middle nodes, return the second middle node.
 */

var middleNode = function(head) {
  // brute
  // iterate through nodes with a counter
  // once iteration is over, divide counter by 2, ceil
  // iterate with counter to return mid node
  let count = 1;
  let node = head;
  while (node.next !== null) {
    node = node.next;
    count++;
  }
  
  count = count % 2 === 0 ? count / 2 + 1 : Math.ceil(count / 2);
  node = head;
  for (let i = 1; i < count; i++) {
    node = node.next;
  }
  return node;
};