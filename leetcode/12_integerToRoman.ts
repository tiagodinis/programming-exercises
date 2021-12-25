// Problem: https://leetcode.com/problems/integer-to-roman/

const integer = [1, 5, 10, 50, 100, 500, 1000];
const roman = ["I", "V", "X", "L", "C", "D", "M"];

function intToRoman(num: number): string {
  let res = "";

  for (let i = integer.length - 1; i >= 0; --i) {
    let times = Math.trunc(num / integer[i]);
    num -= times * integer[i];
    for (; times > 0; --times) res += roman[i];

    let subtractI = i - (((i + 1) % 2) + 1);
    let subtractVal = integer[i] - integer[subtractI];
    if (num - subtractVal >= 0) {
      num -= subtractVal;
      res += roman[subtractI] + roman[i];
    }
  }

  return res;
}
