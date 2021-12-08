// Problem: https://leetcode.com/problems/reverse-string-ii/

function reverseStr(s: string, k: number): string {
  let res = [...s];
  for (let i = 0; i < s.length; i += 2 * k) {
    for (let l = i, r = i + k - 1; l < r; ++l, --r)
      [res[r], res[l]] = [res[l], res[r]];
  }
  return res.join("");
}
