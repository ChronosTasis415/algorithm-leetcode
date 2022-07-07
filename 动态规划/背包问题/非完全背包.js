/**
 * 有若干个物品和一个大小为 m 的背包. 给定数组 A 表示每个物品的大小和数组 V 表示每个物品的价值。
  问最多能装入背包的总价值是多大?
  样例
  样例 1：
  输入：
  m = 10
  A = [2, 3, 5, 7]
  V = [1, 5, 2, 4]

  输出：
  9

  解释：
  装入 A[1] 和 A[3] 可以得到最大价值, V[1] + V[3] = 9
  样例 2：
  输入：
  m = 10
  A = [2, 3, 8]
  V = [2, 5, 8]

  输出：
  10
 */
// m限制总重量 A 重量 V 单价
let count = 0;
var backPack = function (m, A, V) {
  var dp = new Array(m + 1).fill(0); // 动态规划数组，初始化值为0，即没有任何物品，价值为0
  // 外层循环物品
  for (var i = 0; i < A.length; i++) {
    // 内层循环背包，倒序避免重复
    for (var j = m; j >= 0; j--) {
      if (j - A[i] >= 0) {
        // dp[j]表示公式里面的A(Y),V[i]表示pj,A[i]表示wj
        dp[j] = Math.max(dp[j], dp[j - A[i]] + V[i]);
        ++count;
      }
    }
  }
  console.log(dp);
  return dp[m]; // 达到背包容量时，即最大价值
};

const res = backPack(10, [2, 3, 5, 7], [1, 5, 2, 4]);
console.log(count);
console.log(res);
