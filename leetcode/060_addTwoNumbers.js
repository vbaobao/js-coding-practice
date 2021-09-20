const addTwoNumbers = function(l1, l2) {
  let result;
  let current;
  let node1 = l1;
  let node2 = l2;
  let carry = 0;
  while (node1 || node2 || carry !== 0) {
    let sum = (node1?.val || 0) + ( node2?.val || 0) + carry;
    if (sum > 9) {
      carry = Math.floor(sum/10);
      sum = sum - carry * 10;
    } else {
      carry = 0;
    }
    
    if (!result) {
      result = new ListNode(sum);
      current = result;
    } else {
      current.next = new ListNode(sum);
      current = current.next;
    }
    node1 = node1?.next || null;
    node2 = node2?.next || null;
  }
  return result;
};