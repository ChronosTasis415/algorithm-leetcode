/* 
  给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

  数组中的每个元素代表你在该位置可以跳跃的最大长度。

  你的目标是使用最少的跳跃次数到达数组的最后一个位置。

  假设你总是可以到达数组的最后一个位置。

   

  示例 1:

  输入: nums = [2,3,1,1,4]
  输出: 2
  解释: 跳到最后一个位置的最小跳跃数是 2。
       从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
  示例 2:

  输入: nums = [2,3,0,1,4]
  输出: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// 反向查找
// var jump = function (nums) {
//   const len = nums.length;
//   let steps = [];
//   let lastItemIdx = len - 1;
//   let nextPos = len;
//   while (lastItemIdx > 0) {
//     let j = lastItemIdx - 1;

//     while (j >= 0) {
//       if (lastItemIdx - j <= nums[j]) {
//         nextPos = Math.min(nextPos, j);
//       }
//       j--;
//     }
//     // console.log("inner-minStep", nextPos);
//     steps.push(nextPos);
//     lastItemIdx = nextPos;
//   }

//   return steps.length;
// };

// 正向查找
var jump = function (nums) {
  const len = nums.length;

  let nextPos = 0;
  let end = 0;
  let steps = 0;

  for (let i = 0; i < len - 1; i++) {
    nextPos = Math.max(nextPos, nums[i] + i);
    // console.log("nextPos", i, nextPos);
    // 达到边界 跳一下
    if (i === end) {
      console.log("end", i, end);
      end = nextPos;
      steps++;
    }
  }

  return steps;
};
const res = jump([2, 3, 0, 1, 4]);
console.log(res);
