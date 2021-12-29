// Problem: https://leetcode.com/problems/find-the-most-competitive-subsequence/

function mostCompetitive(nums: number[], k: number): number[] {
  let stack = [];
  for (let i = 0; i < nums.length; ++i) {
    while (
      stack.length > 0 &&
      nums[i] < stack[stack.length - 1] &&
      stack.length > k - (nums.length - i)
    )
      stack.pop();
    if (stack.length < k) stack.push(nums[i]);
  }

  return stack;
}
