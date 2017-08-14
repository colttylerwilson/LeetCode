/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    var mergeTree = null;
    if (t1) {
        mergeTree = new TreeNode(t1.val);
        if (t2) {
            mergeTree.val = mergeTree.val + t2.val;
        }
    }
    else if (t2) {
        mergeTree = new TreeNode(t2.val);
        if (t1) {
            mergeTree.val = mergeTree.val + t1.val;
        }
    }
    else{
        mergeTree = null;
    }

    if (checkLeft(t1)) {
        if (checkLeft(t2)) {
            mergeTree.left = mergeTrees(t1.left, t2.left);
        }
        else {
            mergeTree.left = new TreeNode(t1.left.val);
            mergeTree.left.left = t1.left.left;
            mergeTree.left.right = t1.left.right;
        }
    }
    else if (checkLeft(t2)) {
        mergeTree.left = new TreeNode(t2.left.val);
        mergeTree.left.left = t2.left.left;
        mergeTree.left.right = t2.left.right;
    }

    if (checkRight(t1)) {
        if (checkRight(t2)) {
            mergeTree.right = mergeTrees(t1.right, t2.right);
        }
        else {
            mergeTree.right = new TreeNode(t1.right.val);
            mergeTree.right.left = t1.right.left;
            mergeTree.right.right = t1.right.right;
        }
    }
    else if (checkRight(t2)) {
        mergeTree.right = new TreeNode(t2.right.val);
        mergeTree.right.left = t2.right.left;
        mergeTree.right.right = t2.right.right;
    }

    function checkLeft(someTree) {
        if (someTree) {
            if (someTree.left) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }

    function checkRight(someTree) {
        if (someTree) {
            if (someTree.right) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }
    return mergeTree;
};