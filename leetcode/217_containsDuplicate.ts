// Problem: https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
  const set = new Set();
  for (let i = nums.length - 1; i >= 0; i--) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
}
