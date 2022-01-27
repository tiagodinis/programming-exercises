// Problem: https://leetcode.com/problems/add-binary/

function addBinary(a: string, b: string): string {
  let input = a.length > b.length ? { big: a, small: b } : { big: b, small: a };
  let res = "";
  let carry = 0;
  let difference = input.big.length - input.small.length;
  for (let i = input.big.length - 1; i >= 0; i--) {
    let smallIndex = i - difference;
    let smallDigit = smallIndex >= 0 ? Number(input.small[smallIndex]) : 0;
    let sum = Number(input.big[i]) + smallDigit + carry;
    carry = sum > 1 ? 1 : 0;
    res = (sum % 2) + res;
  }

  if (carry) res = "1" + res;

  return res;
}
