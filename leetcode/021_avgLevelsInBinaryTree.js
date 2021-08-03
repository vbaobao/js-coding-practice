/**
 * Given the root of a binary tree, return the average value of the nodes
 * on each level in the form of an array. Answers within 10-5 of the actual
 * answer will be accepted.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let averageOfLevels = function(root) {
  let result = [];
  let numNodes = [];
  // recur with helper function recur(node, depth)
  const recur = (node, depth) => {
    if (!node) return;
    result[depth] ? result[depth] += node.val : result[depth] = node.val;
    numNodes[depth] ? numNodes[depth]++ : numNodes[depth] = 1;
    recur(node.left, depth + 1);
    recur(node.right, depth + 1);
  };
  recur(root, 0);
  //iterate through result and divide by corresponding num nodes
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i]/numNodes[i];
  }
  return result;
};