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
  let maxPrefix = strs[0];

  for (let i = 1; i < len; i++) {
    maxPrefix = compareTwoPrefix(maxPrefix, strs[i]);

    if (!maxPrefix) return "";
  }

  return maxPrefix;

  function compareTwoPrefix(a, b) {
    const aLen = a.length;
    const bLen = b.length;
    let targetIndex = 0;

    while (
      targetIndex <= aLen &&
      targetIndex <= bLen &&
      a.slice(0, targetIndex + 1) === b.slice(0, targetIndex + 1)
    ) {
      targetIndex++;
    }
    return a.slice(0, targetIndex);
  }
};

// const res = longestCommonPrefix(["aflower", "flight", "flow"]);
const res = longestCommonPrefix(["dog", "racecar", "car"]);
console.log(res);
