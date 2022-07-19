/* 
  给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
  子数组 是数组中的一个连续部分。

  示例 1：

  输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
  输出：6
  解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
  示例 2：

  输入：nums = [1]
  输出：1
  示例 3：

  输入：nums = [5,4,-1,7,8]
  输出：23
*/

var maxSubArray = function (nums) {
  let pre = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    // 意思是 如果加上nums[i] 后数字变小了 重新计算位置 从i开始
    pre = Math.max(pre + nums[i], nums[i]);
    max = Math.max(max, pre);
  }

  return max;
};

// var maxSubArray = function (nums) {
//   let pre = 0,
//     maxAns = nums[0];
//   nums.forEach((x) => {
//     pre = Math.max(pre + x, x);
//     maxAns = Math.max(maxAns, pre);
//   });
//   return maxAns;
// };

// const res = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
const res = maxSubArray([-2, 1, 0]);

console.log(res);
