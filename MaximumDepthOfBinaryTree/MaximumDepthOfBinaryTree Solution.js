/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    
        if(root == 'undeclared' || root == null)
        {
            return 0;
        }
    
        var leftDepth = 1 + maxDepth(root.left);
        var rightDepth = 1 + maxDepth(root.right)
    
        var result =  Math.max(leftDepth, rightDepth);
        return result;
    };