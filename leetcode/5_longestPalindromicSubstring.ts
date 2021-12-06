// Problem: https://leetcode.com/problems/longest-palindromic-substring/

function longestPalindrome(s: string): string {
  let longest: string = s[0];
  for (let i = 0; i < s.length - 1; ++i) {
    if (s[i] === s[i + 1]) longest = search(s, longest, i - 1, i + 2);
    if (s[i - 1] === s[i + 1]) longest = search(s, longest, i - 2, i + 2);
  }
  return longest;
}

function search(s: string, longest: string, l: number, r: number): string {
  for (; s[l] === s[r] && l > -1 && r < s.length; --l, ++r);
  return --r - ++l > longest.length - 1 ? s.substring(l, r + 1) : longest;
}
