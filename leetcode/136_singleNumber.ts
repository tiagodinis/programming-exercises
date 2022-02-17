// Problem: https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) set.delete(nums[i]);
    else set.add(nums[i]);
  }

  return set.values().next().value;
}
