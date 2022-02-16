// Problem: https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
  let res = 0;
  let i = s.length - 1;
  while (s[i] === " " && i >= 0) i--;
  for (; s[i] !== " " && i >= 0; i--, res++);
  return res;
}
