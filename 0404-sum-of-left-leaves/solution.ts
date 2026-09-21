// Solution: Sum of Left Leaves
// Runtime: 0 ms | Memory: 57.3 MB

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
    if(!root) return 0;

    if(!root.left && !root.right) return 0;
    let val = 0;

    const left = recursion(root.left, val, true)
    const right = recursion(root.right, val, false) 
    
  

    return left + right + val
};

  const recursion = (node, val, isLeft) => {
        if(!node) return 0;
        
        if(!node.left && !node.right && isLeft) return node.val

        const left = recursion(node.left, val, true)
        const right = recursion(node.right, val, false)

        return left + right + val
        
    }