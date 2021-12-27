// Problem: https://leetcode.com/problems/remove-outermost-parentheses/

function removeOuterParentheses(s: string): string {
  let res = "";
  for (let i = 0, count = 0; i < s.length; ++i) {
    if (s[i] === "(") {
      if (count++) res += "(";
    } else if (count-- > 1) res += ")";
  }

  return res;
}
