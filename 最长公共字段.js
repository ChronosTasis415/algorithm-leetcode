/* 
  编写一个函数来查找字符串数组中的最长公共前缀。

  如果不存在公共前缀，返回空字符串 ""。

  示例 1：

  输入：strs = ["flower","flight", "flow"]
  输出："fl"
  示例 2：

  输入：strs = ["dog","racecar","car"]
  输出：""
  解释：输入不存在公共前缀。
*/

var longestCommonPrefix = function (strs) {
  const len = strs.length;

  if (!len) return "";
  if (len === 1) return strs[0];
  let result = strs[0];
  for (let i = 1; i < len; i++) {
    const common = compareTwoPrefix(result, strs[i]);
    if (!common) return "";
    result = common.length > result.length ? result : common;
  }

  return result;

  function compareTwoPrefix(a, b) {
    let res = "";
    for (let i = 0; i < a.length; i++) {
      for (let j = i; j < a.length; j++) {
        const common = a.slice(i, j + 1);

        if (b.includes(common)) {
          console.log("common", common);
          console.log("res", res);
          res = res.length >= common.length ? res : common;
        }
      }
    }

    return res;
  }
};

// const res = longestCommonPrefix(["dog", "racecar", "car"]);
const res = longestCommonPrefix(["cir", "car"]);
console.log(res);
