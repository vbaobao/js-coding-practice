/**
 * Given the root of a binary tree, invert the tree, and return its root.
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
 * @return {TreeNode}
 */
let invertTree = function(root) {
  let invert = (node) => {
    if (!node) return;
    let temp = node.right;
    node.right = node.left;
    node.left = temp;
    invertTree(node.left);
    invertTree(node.right);
  };

  invert(root);
  return root;
};