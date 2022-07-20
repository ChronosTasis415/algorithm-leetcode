/* 
  假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
  示例 1：

  输入：n = 2
  输出：2
  解释：有两种方法可以爬到楼顶。
  1. 1 阶 + 1 阶
  2. 2 阶
  示例 2：

  输入：n = 3
  输出：3
  解释：有三种方法可以爬到楼顶。
  1. 1 阶 + 1 阶 + 1 阶
  2. 1 阶 + 2 阶
  3. 2 阶 + 1 阶
*/

// var climbStairs = function (n) {
//   let dp = new Array(n).fill(0);

//   for (let i = 0; i <= n; i++) {
//     if (i <= 2) {
//       dp[i] = i;
//     } else {
//       dp[i] = dp[i - 1] + dp[i - 2];
//     }
//   }
//   console.log(dp);
//   return dp[n];
// };

var climbStairs = function (n) {
  let pre = 0;
  let next = 1;

  while (n) {
    [pre, next] = [next, pre + next];
    n--;
  }

  return next;
};

const res = climbStairs(3);
console.log(res);
