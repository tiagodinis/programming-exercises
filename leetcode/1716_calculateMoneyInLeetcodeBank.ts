// Problem: https://leetcode.com/problems/calculate-money-in-leetcode-bank/

function totalMoney(n: number): number {
  let res = 0;
  for (let i = 0; i < n; i++) res += 1 + Math.floor(i / 7) + (i % 7);

  return res;
}
