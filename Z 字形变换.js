/**
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

  比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

  P   A   H   N
  A P L S I I G
  Y   I   R
  之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

  请你实现这个将字符串进行指定行数变换的函数：

  string convert(string s, int numRows);
   

  示例 1：

  输入：s = "PAYPALISHIRING", numRows = 3
  输出："PAHNAPLSIIGYIR"
  示例 2：
  输入：s = "PAYPALISHIRING", numRows = 4
  输出："PINALSIGYAHRPI"
  解释：
  P     I    N
  A   L S  I G
  Y A   H R
  P     I
 */

// 往n行中依次push值
// var convert = function (s, numRows) {
//   if (numRows === 1 || s.length <= numRows) return s;
//   let arr = [];
//   for (let i = 0; i < numRows; ++i) {
//     arr[i] = [];
//   }
//   let row = 0;

//   // 周期 t
//   const t = numRows + numRows - 2;
//   for (let i = 0; i < s.length; ++i) {
//     arr[row].push(s[i]);
//     if (i % t < numRows - 1) {
//       ++row;
//     } else {
//       --row;
//     }
//   }

//   const result = arr.reduce((pre, next) => pre.concat(next.join("")), "");

//   return result;
//   // return JSON.stringify(arr).replace(/\[|\]|"/g, "");
// };

var convert = function (s, numRows) {
  const n = s.length,
    r = numRows;
  rows = r - 1;
  t = 2 * r - 2;
  colLength = Math.ceil((n / t) * (r - 1));
  row = 0;
  col = 0;
  if (r === 1 || r >= n) return s;
  // 一个周期 最多循环个数 t = r + r - 2 = 2r - 2;
  // 一个周期占用的列数 rows = r - 2 + 1 = r - 1;
  // 行数为 r = 3;
  // 列数为 n / t * rows;
  const arr = new Array(r).fill([]);
  for (let i = 0; i < colLength; ++i) {
    arr[i] = new Array(r).fill("");
  }

  for (let i = 0; i < n; ++i) {
    arr[col][row] = s[i];

    if (i % t < r - 1) {
      ++row;
    } else {
      --row;
      ++col;
    }
  }
  let res = "";
  for (let i = 0; i < n; i++) {
    arr.forEach((a) => {
      a[i] && (res += a[i]);
    });
  }

  return res;
};

// const res = convert(
//   "Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers",
//   2
// );
const res = convert("PAYPALISHIRING", 3);
console.log(res);
