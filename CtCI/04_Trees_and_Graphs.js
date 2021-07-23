const assert = (expected, actual, name) => {
  if (expected === actual) return console.log(`PASSED test: ${name}`);
  return console.log(`FAILED test: ${name}\nExpected ${expected}, but got ${actual} instead.`);
};

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(value) {
  this.root = new Node(value);
};

BinarySearchTree.prototype.insert = function(value) {
  this.insertNode(value, this.root);
};

BinarySearchTree.prototype.insertNode = (value, node) => {
  if (node.value <= value) {
    if (node.right !== null) {
      insertNode(value, node.right);
    } else {
      node.right = new Node(value);
    }
  } else {
    if (node.left !== null) {
      insertNode(value, node.left);
    } else {
      node.left = new Node(value);
    }
  }
};

function Graph() {
  this.graph = {}
}

Graph.prototype.get = function (value) {
  return this.graph[value];
};
Graph.prototype.set = function (value, verticies) {
  this.graph[value] = [...this.graph[value], ...verticies];
};

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

/* routeBetweenNodes: given a directed graph and two nodes (S & E),
 * design an algorithm to find out whether there is route from S to E.
 */

const routeBetweenNodes = (graph, s, e) => {
  // Iterate through adjacents of node s
  // recursively iterate through adjacencies
  // base case: if the same node shows up again
  // base case: no adjacent nodes
  // otherwise, run recurse
  let routed = false;

  const recurse = (node1, node2) => {
    if (node1 === node2) return routed = true;
    if (!graph[node1].length) return;
    for (const edge of graph[node1]) {
      if (edge === node2) return true;
      recurse(edge, node2);
    }
  };

  return recurse(s, e)
};

/* minimalTree: given a sorted (increasing order) array with unique
 * integer elements, write an algorithm to create a binary search
 * tree with minimal height.
 */

const minimalTree = (array) => {
  // iterate through the array
  // split array into 2
  // recursively insert into the bianry tree with sliced
  let mid = Math.ceil(array.length / 2);
  let tree = new BinarySearchTree(array[mid]);
  for (let i = 0; i < mid; i++) {
    tree.insert(array[i]);
  }
  for (let i = mid; i < array.length; i++) {
    tree.insert(array[i]);
  }
};

/* listOfDepths: given a binary tree, design an algorithm which
 * creates a linked list of all the nodes at each depth. (e.g.
 * a depth of D has D linked lists.)
 */

const listOfDepths = (tree) => {
  // define the linked list
  // recur breadth first through the tree, input is the current linked list node, and tree node
  // add node to linked list with the value of the current depth
  // call recur function with the head and storeage linked list
  let result = new LinkedList();
  const recur = (listNode, treeNode) => {
    if (listNode.value === null) {
      listNode.value = new LinkedList();
      listNode.add(treeNode.value);
    }
    if (treeNode.left || treeNode.right) listNode.next = new LinkedList();
    if (treeNode.left !== null) {
      listNode.next.add(treeNode.left.value);
      recur(listNode.next, treeNode.left);
    }
    if (treeNode.right !== null) {
      listNode.next.add(treeNode.right.value);
      recur(listNode.next, treeNode.right);
    }
  };
  return result;
};

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

class binarySearchTree {}

/* pathsWithSum: you are given a binary tree in which each node contains an
 * integer value which might be positive or negative.
 * Design an algorithm to count the number of paths that sum to a given
 * value. The path does not need to start or end at the root or a leaf, but
 * it must go downwards (traveling only from parent nodes to child nodes.)
 */

const pathsWithSum = () => {};