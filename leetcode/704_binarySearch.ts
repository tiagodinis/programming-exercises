// Problem: https://leetcode.com/problems/binary-search/

function search(nums: number[], target: number): number {
  for (let l = 0, mid = 0, r = nums.length - 1; l <= r; ) {
    mid = l + Math.trunc((r - l) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) l = mid + 1;
    else r = mid - 1;
  }

  return -1;
}
