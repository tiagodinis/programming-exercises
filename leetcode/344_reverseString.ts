// Problem: https://leetcode.com/problems/reverse-string/

function reverseString(s: string[]): void {
  for (let l = 0, r = s.length - 1; l < r; ++l, --r)
    [s[l], s[r]] = [s[r], s[l]];
}
