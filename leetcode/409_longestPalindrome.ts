// Problem: https://leetcode.com/problems/longest-palindrome/

function longestPalindrome(s: string): number {
  let res = 0;
  const set = new Set();

  [...s].map((l) => {
    if (set.has(l)) {
      set.delete(l);
      res += 2;
    } else set.add(l);
  });

  return res + (set.size ? 1 : 0);
}
