// Problem: https://leetcode.com/problems/add-strings/

function addStrings(num1: string, num2: string): string {
  let input =
    num1.length > num2.length
      ? { big: num1, small: num2 }
      : { big: num2, small: num1 };
  let res = "";
  let carry = 0;
  let difference = input.big.length - input.small.length;
  for (let i = input.big.length - 1; i >= 0; i--) {
    let smallIndex = i - difference;
    let smallDigit = smallIndex >= 0 ? parseInt(input.small[smallIndex]) : 0;
    let val = parseInt(input.big[i]) + smallDigit + carry;
    carry = val > 9 ? 1 : 0;
    if (carry) val -= 10;
    res = val + res;
  }

  if (carry) res = "1" + res;

  return res;
}
