/* 
  给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

  找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

  返回容器可以储存的最大水量。

  说明：你不能倾斜容器。


  示例 1：



  输入：[1,8,6,2,5,4,8,3,7]
  输出：49 
  解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
*/

// 暴力枚举 双循环 超出时间限制
// var maxArea = function (height) {
//   const len = height.length;
//   let max = 0;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       max = Math.max(Math.min(height[i], height[j]) * (j - i), max);
//     }
//   }
//   return max;
// };
// const res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

// console.log(res);

// 双指针
var maxArea = function (height) {
  const len = height.length;
  let start = 0;
  let end = len - 1;
  let max = 0;
  while (start < end) {
    const l = height[start];
    const r = height[end];
    const area = (end - start) * Math.min(l, r);
    max = Math.max(max, area);

    if (l <= r) {
      ++start;
    } else {
      --end;
    }
  }

  return max;
};
const res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

console.log(res);
