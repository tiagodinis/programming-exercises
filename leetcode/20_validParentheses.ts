// Problem: https://leetcode.com/problems/valid-parentheses/

const closing: Record<string, string> = {
  ")": "(",
  "}": "{",
  "]": "[",
};

function isValid(s: string): boolean {
  let stack: string[] = [];

  for (let i = 0; i < s.length; ++i) {
    if (closing[s[i]]) {
      if (closing[s[i]] === stack[stack.length - 1]) stack.pop();
      else return false;
    } else stack.push(s[i]);
  }

  return stack.length === 0;
}
