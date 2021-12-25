// Problem: https://leetcode.com/problems/positions-of-large-groups/

function largeGroupPositions(s: string): number[][] {
  let res: number[][] = [];

  for (let i = 0, start = 0; i <= s.length; ++i) {
    if (s[i - 1] !== s[i]) {
      if (i - start > 2) res.push([start, i - 1]);
      start = i;
    }
  }

  return res;
}
