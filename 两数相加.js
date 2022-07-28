/* 
  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
  输入：l1 = [2,4,3], l2 = [5,6,4]
  输出：[7,0,8]
  解释：342 + 465 = 807.
  示例 2：

  输入：l1 = [0], l2 = [0]
  输出：[0]
  示例 3：

  输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  输出：[8,9,9,9,0,0,0,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var l1Node = l1;
  var l2Node = l2;
  var args = []; // 存储对应的位置相加的结果
  var needAdd1 = 0;
  // 先不考虑进位，对应的链表每一位相加
  while (l1Node || l2Node) {
    // 考虑两个链表长度不同的情况
    // var val1 = l1Node && l1Node.val || 0
    // var val2 = l2Node && l2Node.val || 0
    var val1 = l1Node ? l1Node.val : 0;
    var val2 = l2Node ? l2Node.val : 0;
    var temp = val1 + val2;
    args.push(temp);
    l1Node && (l1Node = l1Node.next);
    l2Node && (l2Node = l2Node.next);
  }
  // 考虑进位的问题
  for (let i = 0; i < args.length; i++) {
    if (args[i] > 9) {
      args[i] -= 10;
      if (args[i + 1] === undefined) {
        args[i + 1] = 1;
      } else {
        args[i + 1] += 1;
      }
    }
  }
  // 把数组转成成链表(递归)
  function createList(...argu) {
    if (argu.length > 0) {
      var nodeStart = new ListNode(argu[0]);
      argu.shift();
      nodeStart.next = createList(...argu);
      return nodeStart;
    } else {
      return null;
    }
  }

  return createList(...args);
};
