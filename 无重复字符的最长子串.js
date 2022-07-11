/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
  示例 1:

  输入: s = "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
  示例 2:

  输入: s = "bbbbb"
  输出: 1
  解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
  示例 3:

  输入: s = "pwwkew"
  输出: 3
  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
       请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

// 暴力枚举
var lengthOfLongestSubstring = function (s) {
  let tar = [];
  for (let i = 0; i < s.length; i++) {
    let arr = [];
    let innerIdx = i;
    while (innerIdx < s.length && !arr.includes(s[innerIdx])) {
      arr.push(s[innerIdx]);
      innerIdx++;
    }

    tar = arr.length > tar.length ? arr : tar;
  }

  return tar.length;
};

const res = lengthOfLongestSubstring("bbbbbbb");
console.log(res);
