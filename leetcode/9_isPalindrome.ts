// Problem: https://leetcode.com/problems/palindrome-number/

function isPalindrome(x: number): boolean {
  if (x < 0 || (x != 0 && x % 10 === 0)) return false;
  let other = 0;
  while (x > other) {
    other = other * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }

  return x === other || x === Math.trunc(other / 10);
}
