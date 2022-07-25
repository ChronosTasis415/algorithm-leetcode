/* 
  94. 二叉树的中序遍历
给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

  示例 1：


  输入：root = [1,null,2,3]
  输出：[1,3,2]
  示例 2：

  输入：root = []
  输出：[]
  示例 3：

  输入：root = [1]
  输出：[1]
*/

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

var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};
const root = {
  val: 1,
  parent: null,
  left: null,
  right: {
    val: 2,
    parent: 1,
    right: null,
    left: {
      val: 3,
      parent: 2,
      left: null,
      right: null,
    },
  },
};

const res = inorderTraversal(root);
console.log(res);
