// 144. Binary Tree Preorder Traversal


// Given the root of a binary tree, return the preorder traversal of its nodes' values.




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
    
    let results = []

    function dfs(node, results){

        if(node === null){
            return null
        }

        results.push(node.val)

        dfs(node.left, results)
        dfs(node.right, results)
    }

    dfs(root, results)

    return results
};
