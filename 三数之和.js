/* 
  给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

  注意：答案中不可以包含重复的三元组。

  示例 1：

  输入：nums = [-1,0,1,2,-1,-4]
  输出：[[-1,-1,2],[-1,0,1]]
  示例 2：

  输入：nums = []
  输出：[]
  示例 3：

  输入：nums = [0]
  输出：[]
*/

// 暴力递归 超时
// var threeSum = function (nums) {
//   let res = [];
//   if (nums.length < 3) return [];
//   for (let x = 0; x < nums.length; x++) {
//     for (let y = x + 1; y < nums.length; y++) {
//       let z = y + 1;
//       while (z < nums.length && nums[x] + nums[y] + nums[z] !== 0) {
//         z++;
//       }

//       if (nums[x] === 0 && nums[y] === 0 && nums[z] === 0) {
//         res.findIndex((r) => JSON.stringify(r) == JSON.stringify([0, 0, 0])) <
//           0 && res.push([0, 0, 0]);
//       }

//       if (
//         nums[x] + nums[y] + nums[z] === 0 &&
//         res.findIndex(
//           (r) =>
//             r.includes(nums[x]) && r.includes(nums[y]) && r.includes(nums[z])
//         ) < 0
//       ) {
//         res.push([nums[x], nums[y], nums[z]]);
//       }
//     }
//   }

//   return res;
// };

var threeSum = function (nums) {
  const n = nums.length;
  if (n < 3) return [];

  nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[n - 1] < 0) {
    return [];
  }
  const ans = [];
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) {
      return ans;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      const target = nums[i] + nums[l] + nums[r];
      if (target > 0) {
        r--;
      }
      if (target < 0) {
        l++;
      }
      if (target === 0) {
        ans.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return ans;
};

const res = threeSum([0, 0, 0, 0]);
// const res = threeSum([-1, 0, 1, 2, -1, -4]);
// const res = threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]);

console.log(res);
