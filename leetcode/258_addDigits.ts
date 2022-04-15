// Problem: https://leetcode.com/problems/add-digits/

function addDigits(num: number): number {
  let sum = num;
  while (Math.trunc(num / 10)) {
    sum = 0;
    for (; num; num = Math.trunc(num / 10)) sum += num % 10;
    num = sum;
  }
  return sum;
}

console.log(addDigits(38));
console.log(addDigits(1));
console.log(addDigits(0));
