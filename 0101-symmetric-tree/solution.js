// Solution: Symmetric Tree
// Runtime: 0 ms | Memory: 58.3 MB

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const isSame = (node1, node2) => {
        if(!node1 && !node2) return true;

        if(!node1 || !node2) return false;
        if(node1.val !== node2.val) return false;
        return isSame(node1.left, node2.right) && isSame(node2.left, node1.right)
    }
    return isSame(root.left, root.right)
};