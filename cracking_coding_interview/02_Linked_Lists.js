const assert = (expected, actual, name) => {
  if (expected === actual) return console.log(`PASSED test: ${name}`);
  return console.log(`FAILED test: ${name}\nExpected ${expected}, but got ${actual} instead.`);
};

/* removeDups: write code to remove duplicates from an unsorted linked list.
 * How can it be solved if a temporary buffer was not allowed?
 */

const removeDups = () => {};

/* returnKthToLast: implement an algo to find the kthto last element of a singly linked list.
 */

const returnKthToLast = () => {};

/* deleteMiddleNode: implement and algorithm to delete a nodei n the middle of a singly linked list,
 * given only access to that node. Nothing is returned. The linked list is just modified.
 */

const deleteMiddleNode = () => {};

/* partition: write code to partition a linked list around a value x, such that all nodes less than x
 * come before all nodes greather than or equal to x. The value x is not necessarily between the left
 * and right partitions.
 */

const partition = () => {};

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

const sumLists = () => {};

/* palindrome: implement a function to check if a linked list is a palindrome. */

const palindrome = () => {};

/* intersection: given two singly linked lists, determine if the two lists intersect. Return
 * the intersecting node. Note that the intersection is deinef based on reference, not value.
 * That is, the kth node of the first linked list is the exact same node (by ref) as the jth
 * node of the second linked list, then they are intersecting.
 */

const intersection = () => {};

/* loopDetection: given a linked list which might contain a loop. Implement and algo that
 * returns the node at the beginning of the loop (if one exists).
 */

const loopDetection = () => {};
