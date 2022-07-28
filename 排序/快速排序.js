/* 
  从小到大排列整数数组

  例如： [7,9,8,2,0,1,3,5,6,4]
  输出：[0,1,2,3,4,5,6,7,8,9]
*/

// 分而治之
var qSort = function (nums) {
  const standard = nums[0];

  if (nums.length < 2) {
    return nums;
  }

  const larger = nums.filter((l) => l > standard);
  const smaller = nums.filter((s) => s < standard);
  return [...qSort(smaller), standard, ...qSort(larger)];
};

// const res = qSort([7, 9, 8, 2, 0, 1, 3, 5, 6, 4]);
const res = qSort([9, 12, 56, 3, 1, 44, 32, 99, 103, 55]);

console.log(res);
