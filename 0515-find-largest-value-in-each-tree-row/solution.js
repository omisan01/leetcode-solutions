// Solution: Find Largest Value in Each Tree Row
// Runtime: 3 ms | Memory: 60 MB

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
var largestValues = function(root) {
    if(!root) return []
    
    const queue = [root];
    const res = [];
    
    
    while(queue.length > 0){
        const queueSize = queue.length;
        let max = -Infinity;
        
        for(let i = 0; i < queueSize; i++){
            const node = queue.shift();
            max = Math.max(node.val, max);
            
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }  

            
        }
        res.push(max)
    }
    
    return res
    
    
};