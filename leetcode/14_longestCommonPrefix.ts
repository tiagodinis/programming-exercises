// Problem: https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
  let res = "";

  for (let i = 0; true; ++i) {
    let char = strs[0][i];
    if (char === undefined) return res;
    for (let j = 0; j < strs.length; ++j) {
      if (strs[j][i] !== char) return res;
    }
    res += char;
  }

  return res;
}

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
