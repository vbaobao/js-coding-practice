const rotateRight = function(head, k) {
  // iterate through the linked list
  // two pointers, one that is k nodes before end
  // assign slow node's next to null
  // assign fast node's next to head
  if (!head || !head.next || k === 0) return head;
  let fast = head;
  let slow = head;
  let newHead;
  let len = 0;
  let node = head;
  
  while (node) {
    len++;
    node = node.next;
  }
  
  k = k % len;
  
  if (k === 0) return head;
  
  while (fast.next) {
    if (k > 0) {
      fast = fast.next;
      k--;
    } else {
      fast = fast.next;
      slow = slow.next;
    }
    console.log(slow);
    console.log(fast);
  }
  // fast.next = head
  // new head = slow.next
  // close cycle -> slow.next = null
  newHead = slow.next;
  slow.next = null;
  fast.next = head;
  return newHead;
};
