/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA)
 * of two given nodes in the BST.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common
 * ancestor is defined between two nodes p and q as the lowest node in
 * T that has both p and q as descendants (where we allow a node to be
 * a descendant of itself).”
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

let lowestCommonAncestor = function(root, p, q) {
    // BFS until either node no longer in the tree
    // To check, tree is traversed DFS
    if (!root) return root;
    if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    return root;
};
