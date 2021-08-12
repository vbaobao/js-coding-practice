/**
 * Given the roots of two binary trees root and subRoot,
 * return true if there is a subtree of root with the same
 * structure and node values of subRoot and false otherwise.
 *
 * A subtree of a binary tree tree is a tree that consists
 * of a node in tree and all of this node's descendants.
 * The tree tree could also be considered as a subtree of itself.
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

let isSubtree = function(root, subRoot) {
  // recurse down loop until matching node to subroot
  // If node matched then check if the entire tree matches
  const isSame = (node1, node2) => {
    if (!node1 && !node2) return true;
    if ((!node1 && node2) || (node1 && !node2) || node1.val !== node2.val) return false;
    return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
  };
  
  if (!root) return false;
  if (root.val === subRoot.val && isSame(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
