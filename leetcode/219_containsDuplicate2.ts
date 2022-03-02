// Problem: https://leetcode.com/problems/contains-duplicate-ii/

function containsDuplicate2(nums: number[], k: number): boolean {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (i - map.get(nums[i]) > k) map.set(nums[i], i);
      else return true;
    } else map.set(nums[i], i);
  }
  return false;
}
