// Problem: https://leetcode.com/problems/arranging-coins/

function arrangeCoins(n: number): number {
  let rows = 0;
  for (let toSub = 1; n >= toSub; n -= toSub++, rows++);
  return rows;
}
