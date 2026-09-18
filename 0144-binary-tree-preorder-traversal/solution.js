// Solution: Binary Tree Preorder Traversal
// Runtime: 0 ms | Memory: 53.3 MB

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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const res = []
    const preorder = (node) => {
        if(!node) return;
        res.push(node.val);
        preorder(node.left);
        preorder(node.right)
    }
    preorder(root);

    return res
};