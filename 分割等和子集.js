/**
 * 给定一个非空的正整数数组 nums ，请判断能否将这些数字分成元素和相等的两部分。
  示例 1：

  输入：nums = [1,5,11,5]
  输出：true
  解释：nums 可以分割成 [1, 5, 5] 和 [11] 。
  示例 2：

  输入：nums = [1,2,3,5]
  输出：false
  解释：nums 不可以分为和相等的两部分
 */
var canPartition = function (nums) {
  const n = nums.length;
  if (n < 2) {
    return false;
  }
  let sum = 0,
    maxNum = 0;
  for (const num of nums) {
    sum += num;
    maxNum = maxNum > num ? maxNum : num;
  }
  if (sum & 1) {
    return false;
  }
  const target = Math.floor(sum / 2);
  if (maxNum > target) {
    return false;
  }
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let j = target; j >= num; --j) {
      dp[j] |= dp[j - num];
    }
  }
  return dp[target];
};

console.log(canPartition([1, 5, 11, 5]));
