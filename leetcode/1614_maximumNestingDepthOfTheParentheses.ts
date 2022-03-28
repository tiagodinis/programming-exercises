// Problem: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

function maxDepth(s: string): number {
  let maxDepth = 0;

  for (let i = 0, depth = 0; i < s.length; i++) {
    if (s[i] === "(") maxDepth = Math.max(maxDepth, ++depth);
    else if (s[i] === ")") depth--;
  }

  return maxDepth;
}
