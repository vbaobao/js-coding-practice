const assert = (expected, actual, name) => {
  if (expected === actual) return console.log(`PASSED test: ${name}`);
  return console.log(`FAILED test: ${name}\nExpected ${expected}, but got ${actual} instead.`);
};

/* routeBetweenNodes: given a directed graph and two nodes (S & E),
 * design an algorithm to find out whether there is route from S to E.
 */

const routeBetweenNodes = () => {};

/* minimalTree: given a sorted (increasing order) array with unique
 * integer elements, write an algorithm to create a binary search
 * tree with minimal height.
 */

const minimalTree = () => {};

/* listOfDepths: given a binary tree, design an algorithm which
 * creates a linked list of all the nodes at each depth. (e.g.
 * a depth of D has D linked lists.)
 */

const listOfDepths = () => {};

/* checkBalances: implement a function to check if a binary tree
 * is balanced. For the purposes of this question, a balanced
 * tree is defined to be a tree such that the heights of the two
 * subtrees of any node never differ by more than one.
 */

const checkBalances = () => {};

/* validateBST: implement a function to check if a binary tree is
 * a binary search tree.
 */

const validateBST = () => {};

/* successor: write an algorithm to find the "next" node
 * (i.e.in-order successor) of a given ndoe in a binary
 * search tree. You may assume that each node has a link to its parent.
 */

const successor = () => {};

/* buildOrder: you are given a list of projects and a list of dependencies
 * (which is a list of pairs of projects where the second project is
 * dependent on the first project.) All of a projects dependencies must be
 * built before the project is. Find a build order that will allow the
 * projects to be built. If there is no valid build order, return an error.
 */

const buildOrder = () => {};

/* firstCommonAncestor: design an algorithm and write code to find the
 * first common ancestor of two nodes in a binary tree. Avoid storing
 * additional nodes in a dara structure. NOTE: this is not necessarily
 * a binary search tree.
 */

const firstCommonAncestor = () => {};

/* BSTSequence: a binary search tree was created by traversing through
 * an array from left to right and inserting each element. Given a
 * binary search tree with distinct elements, print all possible arrays
 * that could have led to this tree.
 */

const BSTSequence = () => {};

/* checkSubtree: T1 and T2 are two very large binary trees, with T1 much
 * bigger than T2. Create an algorithm to determine if T2 is a subtree of
 * T1. A tree T2 is a subtree of T1 if there exists a node n in T1 such
 * that the subtree of n is identical to T2. That is, if you cut off the
 * tree at node n, the two trees would be identical.
 */

const checkSubtree = () => {};

/* randomNode: you are implementing a binary search tee class from scratch
 * which, in addition to insert(), find(), and delete(), has a method
 * randomNode() which returns a random node from the tree. All ndoes should
 * be equally likely to be chosen. Design and implement and algorithm for
 * getRandomNode() and explain how you would implement the rest of the
 * methods.
 */

class binarySearchTree() {}

/* pathsWithSum: you are given a binary tree in which each node contains an
 * integer value which might be positive or negative.
 * Design an algorithm to count the number of paths that sum to a given
 * value. The path does not need to start or end at the root or a leaf, but
 * it must go downwards (traveling only from parent nodes to child nodes.)
 */

const pathsWithSum = () => {};