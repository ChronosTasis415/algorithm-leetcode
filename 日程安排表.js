var MyCalendar = function () {
  this.plans = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */

// 方法1
// MyCalendar.prototype.book = function (start, end) {
//   if (!start && !end) return null;
//   const len = this.plans.length;

//   if (!len) {
//     this.plans.push([start, end]);
//     return true;
//   } else {
//     // idx > -1 即表示在区间内
//     const idx = this.plans.findIndex((el) => {
//       return start < el[1] && end > el[0];
//     });
//     idx <= -1 && this.plans.push([start, end]);
//     return idx > -1 ? false : true;
//   }
// };

// 方法2

MyCalendar.prototype.book = function (start, end) {
  for (const arr of this.plans) {
    const l = arr[0];
    const r = arr[1];
    // 只需要保证 end > l && start < r 就一定有交集
    if (end > l && start < r) {
      return false;
    }
  }
  this.plans.push([start, end]);

  return true;
};

const myCalendar = new MyCalendar();

console.log(myCalendar.book(10, 20)); // true
console.log(myCalendar.book(15, 25)); // false
console.log(myCalendar.book(20, 30)); // true
