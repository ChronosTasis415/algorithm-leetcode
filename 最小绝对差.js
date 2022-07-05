/**
 * 给你个整数数组 arr，其中每个元素都 不相同。

    请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。

     

    示例 1：

    输入：arr = [4,2,1,3]
    输出：[[1,2],[2,3],[3,4]]
    示例 2：

    输入：arr = [1,3,6,10,15]
    输出：[[1,3]]
    示例 3：

    输入：arr = [3,8,-10,23,19,-4,-14,27]
    输出：[[-14,-10],[19,23],[23,27]]

*/

function minAbsDiff(arr) {
  const len = arr.length;
  // 现将数组从小到大排序
  arr.sort((a, b) => a - b);
  let absDiff = Number.MAX_VALUE;
  let res = [];

  for (let i = 0; i < len - 1; i++) {
    const target = arr[i + 1] - arr[i];

    if (target < absDiff) {
      absDiff = target;
      //   有更小结果 就清空原来存储的结果
      res = [];

      res.push([arr[i], arr[i + 1]]);
    } else if (target === absDiff) {
      res.push([arr[i], arr[i + 1]]);
    }
  }

  return res;
}

console.log(minAbsDiff([4, 2, 1, 3]));
console.log(minAbsDiff([1, 3, 6, 10, 15]));
console.log(minAbsDiff([3, 8, -10, 23, 19, -4, -14, 27]));
