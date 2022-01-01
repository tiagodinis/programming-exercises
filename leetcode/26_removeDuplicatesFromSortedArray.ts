// Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
  let k = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== nums[k]) nums[++k] = nums[i];
  }
  return ++k;
}
