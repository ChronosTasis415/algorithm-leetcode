/* 
18. 四数之和
给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 。

示例 1：

输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
示例 2：

输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
*/

// 双指针
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// var fourSum = function (nums, target) {
//   const convertArr = nums.sort((a, b) => a - b);
//   const len = nums.length;
//   let result = [];
//   for (let i = 1; i < len - 2; i++) {
//     for (let j = i + 1; j < len; j++) {
//       let l = 0;
//       let r = len - 1;

//       while (l < i && r > j) {
//         const res =
//           convertArr[i] + convertArr[j] + convertArr[l] + convertArr[r];

//         if (res === target) {
//           result.push(
//             [convertArr[i], convertArr[j], convertArr[l], convertArr[r]].sort(
//               (a, b) => a - b
//             )
//           );
//         }
//         if (target <= res) {
//           r--;
//         } else {
//           l++;
//         }
//       }
//     }
//   }

//   function delRepeat(arr) {
//     let res = [];

//     arr.forEach((i) => {
//       const idx = res.findIndex((j) => JSON.stringify(j) === JSON.stringify(i));

//       if (idx < 0) {
//         res.push(i);
//       }
//     });
//     return res;
//   }
//   return delRepeat(result);
// };

// 双指针 最优解
var fourSum = function (nums, target) {
  const quadruplets = [];
  if (nums.length < 4) {
    return quadruplets;
  }
  nums.sort((x, y) => x - y);
  const length = nums.length;
  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }
    if (
      nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] <
      target
    ) {
      continue;
    }
    console.log(i);
    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
      }
      if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {
        continue;
      }
      let left = j + 1,
        right = length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return quadruplets;
};

// const res = fourSum([1, 0, -1, 0, -2, 2], 0);
// const res = fourSum([1, 0, -1, 0], 0);
// const res = fourSum([2, 2, 2, 2, 2, 2, 2], 8);
const res = fourSum([-2, -1, -1, 1, 1, 2, 2], 0);
// const res = fourSum([0, 0, 0, 0], 0);
console.log(res);
