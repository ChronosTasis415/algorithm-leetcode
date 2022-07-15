/* 
  一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

  答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

  示例 1：

  输入：n = 2
  输出：2
  示例 2：

  输入：n = 7
  输出：21
  示例 3：

  输入：n = 0
  输出：1
*/

// 暴力递归
// fn(x) = f(x-1) + f(x-2) 会超时
// var numWays = function (n) {
//   if (n < 4) return n;

//   // return numWays(n - 1) + numWays(n - 2);
//   return (numWays(n - 1) + numWays(n - 2)) % (1e9 + 7);
// };

// 动态规划
// var numWays = function (n) {
//   let dp = new Array(n).fill(0);

//   if (n === 0) return 1;
//   for (let i = 1; i <= n; i++) {
//     if (i < 4) {
//       dp[i] = i;
//     } else {
//       dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
//     }
//   }
//   return dp[n];

// };

// 数据存储
var numWays = function (n) {
  let a = 0,
    b = 1;
  while (n--) {
    [a, b] = [b, (a + b) % 1000000007];
  }
  return b;
};

const res = numWays(78);
console.log(res);
