/* 
  给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

  返回这三个数的和。

  假定每组输入只存在恰好一个解。

   

  示例 1：

  输入：nums = [-1,2,1,-4], target = 1
  输出：2
  解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
  示例 2：

  输入：nums = [0,0,0], target = 1
  输出：0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const len = nums.length;
  const convertArr = nums.sort((a, b) => a - b);

  function abs(a) {
    return Math.abs(a - target);
  }
  let min = Number.MAX_VALUE;

  for (let i = 1; i < len; i++) {
    let l = 0;
    let r = len - 1;
    while (l < i && r > i) {
      let res = convertArr[l] + convertArr[i] + convertArr[r];
      console.log("inner", res);
      if (res >= target) {
        r--;
      } else {
        l++;
      }
      if (abs(min) >= abs(res)) {
        min = res;
      }
    }
  }

  return min;
};

const res = threeSumClosest([-1, 2, 1, -4], 1);
// const res = threeSumClosest([0, 0, 0], 1);
console.log(res);
