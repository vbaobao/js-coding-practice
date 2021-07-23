/* 
 * Given head, the head of a linked list, determine if the linked list has
 * a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list
 * that can be reached again by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next
 * pointer is connected to. Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */

let hasCycle = function(head) {
  if (!head) return false;
  if (head.next === null || head.next.next === null) return false;
  let position = head.next.next;
  let runner = head;
  // two running iterations. position increments by 2 steps while runner trails behind.
  // if position and runner ends up on the same node, then there is a cycle
  // if null is reached, then no cycle
  
  while (position.next !== null && position.next.next !== null) {
      if (position === runner) return true;
      position = position.next.next;
      runner = runner.next;
  }
  return false;
};