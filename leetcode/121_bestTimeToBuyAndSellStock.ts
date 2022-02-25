// Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = prices.length - 1, sell = -Infinity; i >= 0; i--) {
    if (prices[i] >= sell) sell = prices[i];
    else profit = Math.max(profit, sell - prices[i]);
  }

  return profit;
}
