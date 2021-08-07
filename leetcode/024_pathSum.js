/**
 * Given the root of a binary tree and an integer targetSum, return true if the tree
 * has a root-to-leaf path such that adding up all the values along the path
 * equals targetSum.
 *
 * A leaf is a node with no children.
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
 * @param {number} targetSum
 * @return {boolean}
 */
let hasPathSum = function(root, targetSum) {
  // This solution doesn't look as good, but runtime is faster. Memory is the same.
  if (!root) return false;
  let metTarget = false;
  
  const recur = (node, sum) => {
    // add node to sum
    // if sum is larger than target, return
    // if sum is met and node has no children, set metTarget to true
    // if node has no children and target sum not met, return
    // if node has children and sum is less than target, continue to recur
    sum += node.val;
    if (!node.left && !node.right && sum !== targetSum) return;
    if (sum === targetSum && !node.left && !node.right) {
        metTarget = true;
        return;
    }
    if (node.left) recur(node.left, sum);
    if (node.right) recur(node.right, sum);
  };
  
  recur(root, 0);
  return metTarget;
};
