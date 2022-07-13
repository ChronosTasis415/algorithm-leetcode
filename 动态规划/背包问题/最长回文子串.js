/* 
  给你一个字符串 s，找到 s 中最长的回文子串。

   

  示例 1：

  输入：s = "babad"
  输出："bab"
  解释："aba" 同样是符合题意的答案。
  示例 2：

  输入：s = "cbbd"
  输出："bb"

*/
// 动态规划

// 状态交换方程 dp[i][j] = s[i] === s[j] && dp[i-1][j+1]
// 边界情况 j- 1 - (i + 1) + 1 < 2; j - i < 3;
var longestPalindrome = function (s) {
  const len = s.length;
  let maxStr = "";
  if (len === 1) return s;

  let dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(0);
    dp[i][i] = true;
  }
  // i 为左边界 col j为右边界 row
  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j]) {
        let longer = s.slice(i, j + 1);
        maxStr = longer.length > maxStr.length ? longer : maxStr;
      }
    }
  }

  return maxStr || s[0];
};

// const res = longestPalindrome("acdedca");
// const res = longestPalindrome("aaaa");
const res = longestPalindrome("abcd");
// const res = longestPalindrome("abba");
// const res = longestPalindrome("baba");
// const res = longestPalindrome("erbbasd");
//                             0123456789
// const res = longestPalindrome("abcddcba");
console.log(res);

// var longestPalindrome = function (s) {
//   const len = s.length;
//   if (!s) return "";
//   if (len === 1) return s;
//   if (len === 2) {
//     return s[0] === s[1] ? s : s[0];
//   }

//   let maxStr = "";
//   let even = "";
//   let odd = "";

//   for (let i = 0; i < len; i++) {
//     // 相邻两项相等 abba这种情况
//     if (s[i] === s[i + 1]) {
//       const { left, right } = maxStrPos(s, i - 1, i + 2);
//       const str = s.slice(left, right);
//       even = str.length > even.length ? str : even;
//     }
//     // i位置左右相等
//     if (s[i - 1] === s[i + 1]) {
//       const { left, right } = maxStrPos(s, i - 1, i + 1);
//       const str = s.slice(left, right);
//       odd = str.length > odd.length ? str : odd;
//     }
//   }
//   maxStr = even.length > odd.length ? even : odd;

//   return maxStr || s[0];

//   function maxStrPos(s, left, right) {
//     const len = s.length;
//     // break之前 进入了循环 left减了1；right加了1 slice截取不包含右边界再加1
//     while (left >= 0 && right <= len - 1 && s[left] === s[right]) {
//       --left;
//       ++right;
//     }

//     return {
//       left: left + 1,
//       right: right - 1 + 1,
//     };
//   }
// };
