// Problem: https://leetcode.com/problems/reverse-only-letters/

function reverseOnlyLetters(s: string): string {
  let res = [...s];
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && s[left].toLowerCase() === s[left].toUpperCase())
      left++;
    while (left < right && s[right].toLowerCase() === s[right].toUpperCase())
      right--;
    [res[left], res[right]] = [res[right], res[left]];
    left++;
    right--;
  }

  return res.join("");
}
