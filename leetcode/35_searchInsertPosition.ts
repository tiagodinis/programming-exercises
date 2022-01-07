// Problem: https://leetcode.com/problems/search-insert-position/

function searchInsertBinarySearch(nums: number[], target: number): number {
  let mid: number = 0;
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    mid = Math.trunc(left + (right - left) / 2);
    if (target > nums[mid]) left = mid + 1;
    else right = mid - 1;
  }

  return left;
}

function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; ++i) {
    if (target <= nums[i]) return i;
  }

  return nums.length;
}
