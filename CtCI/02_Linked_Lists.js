const assert = (expected, actual, name) => {
  if (expected === actual) return console.log(`PASSED test: ${name}`);
  return console.log(`FAILED test: ${name}\nExpected ${expected}, but got ${actual} instead.`);
};

/*
class LinkedList {
  constructor(head = null) {
      this.head = head
  }
}

class ListNode {
  constructor(data) {
      this.data = data
      this.next = null                
  }
}
 */

function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.remove = function (value) {
  let node = this.head;
  let removedNode = null;

  while (node.next !== null) {
    if (node.next.value === value) {
      removedNode = node.next;
      node.next = node.next.next;
      break;
    }
    node = node.next;
  }

  return removedNode;
};

LinkedList.prototype.size = function (value) {
  let node = this.head;
  let size = 0;

  while (node.next !== null) {
    size++;
    node = node.next;
  }

  return size;
};

LinkedList.prototype.lastNode = function () {
  let node = this.head;

  while (node.next !== null) {
    node = node.next;
  }

  return node;
};

LinkedList.prototype.add = function (value) {
  let node = new Node(value);
  if (this.head === null) {
    this.head = node;
    return;
  }
  let lastNode = this.head;
  while (lastNode.next !== null) {
    lastNode = lastNode.next;
  }

  lastNode.next = node;
};

/* removeDups: write code to remove duplicates from an unsorted linked list.
 * How can it be solved if a temporary buffer was not allowed?
 */

const removeDups = (node) => {
  // I: linked list, head node
  // O: none, mutate linked list
  // Dup store
  let store = {};
  let currentNode = node;

  // Iterate through linked list
  while (currentNode.next !== null) {
    // add current node value
    // if node.next value is in the store already, remove the node next node
    // move to next node
    store[currentNode.value] = currentNode.value;
    if (store[currentNode.next.value]) currentNode.next = currentNode.next.next;
    currentNode = currentNode.next;
  }
};

/* returnKthToLast: implement an algo to find the kthto last element of a singly linked list.
 */

const returnKthToLast = (k, node) => {
  // store linkedlist size
  // check if k is within size of the linkedlist
  // times to iterate = size - k
  // iterate through linkedlist and store in array based on distance from last
  // return node

  let size = node.size();
  if (k > size) return null;
  let iterations = size - k;
  let currentNode = node;

  for (iterations; iterations > 0; iterations--) {
    currentNode = currentNode.next;
  }

  return currentNode;
};

/* deleteMiddleNode: implement an algorithm to delete a node in the middle of a singly linked list,
 * given only access to that node. Nothing is returned. The linked list is just modified.
 */

const deleteMiddleNode = (node) => {
  let nextNode = node.next;
  node.value = nextNode.value;
  node.next = nextNode.next;
  nextNode.next = null;
};

/* partition: write code to partition a linked list around a value x, such that all nodes less than x
 * come before all nodes greather than or equal to x. The value x is not necessarily between the left
 * and right partitions.
 */

const partition = (value, head) => {
  // 2 partition vars
  // iterate to find the node with matching value
  // if matching value is found, add to first partition var
  // if value is greater, value send to first partition
  // if value is less, value is sent to secodn partition
  // if no matching value, return the linkedlist
  let greater = [], lesser = [];
  let node = head;
  while (node.next !== null) {
    if (node.value >= value) {
      greater.push(node);
    } else {
      lesser.push(node);
    }
    node = node.next;
  }

  // concat the arrays
  let list = lesser.concat(greater);
  let mergedHead = null
  let temp = null;
  // iterate through the lists to merge the nodes
  for (const node of list) {
    if (!mergedHead) {
      mergedHead = node;
      temp = node;
    } else {
      temp.next = node;
      temp = temp.next;
    }
  }

  return mergedHead;
};

/* sumLists: you have 2 numbers represented by a linked list, where each node contains a single
 * digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list.
 * Write a function that adds the two numbers and returns the sum as a linked list. Not allowed to
 * convert the linked list to an integer.
 * 
 * ( 7 -> 1 -> 6) + (5 -> 9 -> 2) --> 617 + 295
 * returns (2 -> 1 -> 9) --> 912
 * 
 * Try again if the numbers are stored in reverse order.
 */

const sumLists = (num1, num2) => {
  // start new results linked list
  // sum by places
  // check size of each list, max is the size of the larger
  // iterate based on the max size
  // sum by places
  // if one of linked list does not have a next, then only pass down other list's value
  // if sum is greater than 9, store the digit for next place
  // if not, set store to 0

  let result = null;
  let nodeBuffer = null;
  let max = num1.size() >= num2.size() ? num1.size() : num2.size();
  let node1 = num1;
  let node2 = num2;
  let carryover = 0;

  for (let i = 0; i < max; i++) {
    let sum = node1?.value || 0 + node2?.value || 0 + carryover;
    if (sum > 9) {
      carryover = Math.floor(sum/10);
      sum = sum - carryover;
    } else {
      carryover = 0;
    }

    if (result === null) {
      nodeBuffer = new Node(sum);
      result = nodeBuffer;
    } else {
      nodeBuffer.next = new Node(sum);
      nodeBuffer = nodeBuffer.next;
    }
  }
  if (carryover > 0) nodeBuffer.next = new Node(carryover);
  return result;
};

/* palindrome: implement a function to check if a linked list is a palindrome. */

const palindrome = (head) => {
  // iterate through linked list
  // have 2 storage arrays
  // store into each array, one that is reversed
  // compare the two arrays
  // if both arrays match, then return true

  let array1 = [];
  let array2 = [];
  let node = head;

  while (node.next !== null) {
    array1.push(node.value);
    array2.unshift(node.value);
    node = node.next;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1 !== array2) return false;
  }
  return true;
};

/* intersection: given two singly linked lists, determine if the two lists intersect. Return
 * the intersecting node. Note that the intersection is deinef based on reference, not value.
 * That is, the kth node of the first linked list is the exact same node (by ref) as the jth
 * node of the second linked list, then they are intersecting.
 */

const intersection = (head1, head2) => {
  // iterate through one of the linked lists
  // nested loop
  // compare objects
  // return intersecting node

  let node1 = head1;
  let node2 = head2;

  while (node1.next !== null) {
    while (node2.next !== null) {
      if (node1 === node2) return node;
      node2 = node2.next
    }
    node1 = node1.next;
  }
  return null;
};

/* loopDetection: given a linked list which might contain a loop. Implement and algo that
 * returns the node at the beginning of the loop (if one exists).
 */

const loopDetection = (head) => {
  // Find a loop by having a runner
  // if runner === current node, then there is a loop
  // either exit loop with matching runner or reaching the end of the linked list
  // once the loop is confirmed, store it in an array
  // iterate through the linked list again to check the values against the store
  let node = head.next.next;
  let runner = head;
  let store = [];

  while (node.next !== null) {
    if (node === runner) {
      let firstLoop = node;
      while (node.next !== firstLoop) {
        store.push(node);
        node = node.next;
      }
      break;
    }
    node = node.next;
    runner = runner.next.next;
  }
  node = head;
  if (store.length > 0) {
    while (node.next !== null) {
      for (const loop of store) {
        if (loop === node) return node;
      }
      node = node.next;
    }
  }
  return null;
};

// let test = new LinkedList();
// test.add(1);
// test.add(2);
// test.add(3);
// test.add(4);
// let node = test.head;
// while (node.next !== null) {
//   node = node.next;
// }
// let node2 = test.head.next;
// node.next = node2;
// console.log(loopDetection(test.head));