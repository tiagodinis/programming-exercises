// Problem: https://leetcode.com/problems/implement-strstr/

function strStr(haystack: string, needle: string): number {
  if (!needle.length) return 0;

  for (let i = 0, j = 0; i < haystack.length; ++i) {
    for (j = 0; needle[j] === haystack[i + j] && j < needle.length; ++j);
    if (j === needle.length) return i;
  }

  return -1;
}
