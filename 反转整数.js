/* 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

  如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

  假设环境不允许存储 64 位整数（有符号或无符号）。
   

  示例 1：

  输入：x = 123
  输出：321
  示例 2：

  输入：x = -123
  输出：-321
  示例 3：

  输入：x = 120
  输出：21 
*/
var reverse = function (x) {
  let res = 0;
  while (x) {
    res = res * 10 + (x % 10);
    console.log(res);
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
    // x = Math.floor(x / 10);
    x = ~~(x / 10); // 取整数
  }
  return res;
};

const res = reverse(-123);

console.log(res);
