// Solution: Minimum Depth of Binary Tree
// Runtime: 5 ms | Memory: 92.8 MB

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    if (!root.left) return 1 + minDepth(root.right)
    if(!root.right) return 1 + minDepth(root.left);

    return Math.min(minDepth(root.right), minDepth(root.left)) + 1


};