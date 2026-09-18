// Solution: Binary Tree Postorder Traversal
// Runtime: 0 ms | Memory: 53 MB

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
var postorderTraversal = function(root) {
    const res = [];

    const postorder = (node) => {
        if(!node) return;
        postorder(node.left);
        postorder(node.right);
        res.push(node.val)
    }
    postorder(root);

    return res
};