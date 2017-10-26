/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root == null) {
        return [];
    }
    Switch(root);

    function Switch(node) {
        if(node == null) {
            return;
        }
        var temp = node.left;
        node.left = node.right;
        node.right = temp;
        Switch(node.left);
        Switch(node.right);
    }

    return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var root0 = new TreeNode(4);
root0.left = new TreeNode(2);
root0.right = new TreeNode(7);
root0.left.left = new TreeNode(1);
root0.left.right = new TreeNode(3);
root0.right.left = new TreeNode(6);
root0.right.right = new TreeNode(9);

invertTree(root0);