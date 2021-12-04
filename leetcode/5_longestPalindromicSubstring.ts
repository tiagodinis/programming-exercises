// Problem: https://leetcode.com/problems/longest-palindromic-substring/

function longestPalindrome(s: string): string {
  let longest: string = s[0];
  for (let curr = 0, prev = 0; curr < s.length - 1; prev = curr, ++curr) {
    if (s[curr] === s[curr + 1])
      longest = search(s, longest, curr - 1, curr + 2);
    if (s[prev] === s[curr + 1])
      longest = search(s, longest, prev - 1, curr + 2);
  }

  return longest;
}

function search(s: string, longest: string, l: number, r: number): string {
  for (; s[l] === s[r] && l > -1 && r < s.length; --l, ++r);
  l++;
  r--;
  return r - l > longest.length - 1 ? s.substring(l, r + 1) : longest;
}
