/**
  * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

    示例:

    现有矩阵 matrix 如下：

    [
      [1,   4,  7, 11, 15],
      [2,   5,  8, 12, 19],
      [3,   6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]
    给定 target = 5，返回 true。

    给定 target = 20，返回 false。
 */
// 1 暴力枚举
// var findNumberIn2DArray = function (matrix, target) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (target === matrix[i][j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// 2 根据数组特性来判断 从右侧开始
var findNumberIn2DArray = function (matrix, target) {
  let col = matrix[0].length - 1;
  let row = 0;
  let current;
  while (col >= 0 && row <= matrix.length - 1) {
    current = matrix[row][col];
    current < target && row++;
    current > target && col--;

    if (current === target) {
      return true;
    }
  }

  return false;

  // while (current !== target && col >= 0 && row <= matrix.length - 1) {
  //   if (current < target) {
  //     col--;
  //   }

  //   if (current > target) {
  //     row++;
  //   }
  // }

  console.log(current);
  console.log(col);
  console.log(row);
};
const arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
findNumberIn2DArray(arr, 10);
