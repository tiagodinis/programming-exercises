// Problem: https://leetcode.com/problems/add-to-array-form-of-integer/

function addToArrayForm(num: number[], k: number): number[] {
  let kArr: number[] = [];
  while (k) {
    kArr = [k % 10].concat(kArr);
    k = Math.trunc(k / 10);
  }

  let res: number[] = [];
  let carry = 0;
  let input = num.length > kArr.length ? [num, kArr] : [kArr, num];
  let difference = input[0].length - input[1].length;
  for (let i = input[0].length - 1; i >= 0; i--) {
    let smallIndex = i - difference;
    let smallDigit = smallIndex >= 0 ? Number(input[1][smallIndex]) : 0;
    let sum = Number(input[0][i]) + smallDigit + carry;
    carry = sum > 9 ? 1 : 0;
    if (sum > 9) sum -= 10;
    res = [sum].concat(res);
  }

  if (carry) res = [1].concat(res);

  return res;
}
