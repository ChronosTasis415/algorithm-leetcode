/* 
给定若干种物品, 每种物品都有无限个. 第 i 个物品的体积为 A[i], 价值为 V[i].
再给定一个容量为 m 的背包. 问可以装入背包的最大价值是多少?
样例
样例 1:
输入: A = [2, 3, 5, 7], V = [1, 5, 2, 4], m = 10
输出: 15
解释: 装入三个物品 1 (A[1] = 3, V[1] = 5), 总价值 15.

样例 2:
输入: A = [1, 2, 3], V = [1, 2, 3], m = 5
输出: 5
解释: 策略不唯一. 比如, 装入五个物品 0 (A[0] = 1, V[0] = 1)
*/
var backPack = function (m, A, V) {
  var dp = new Array(m + 1).fill(0); // 动态规划数组，初始化值为0，即没有任何物品，价值为0
  // 外层循环背包
  for (var i = 0; i <= m; i++) {
    // 内层循环物品
    for (var j = 0; j < A.length; j++) {
      if (i - A[j] >= 0) {
        dp[i] = Math.max(dp[i], dp[i - A[j]] + V[j]);
      }
      console.log(i, dp);
    }
  }
  console.log(dp);
  return dp[m]; // 达到背包容量时，即最大价值
};

const res = backPack(10, [2, 3, 5, 7], [1, 5, 2, 4]);
console.log(res);
