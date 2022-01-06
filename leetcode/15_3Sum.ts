// Problem: https://leetcode.com/problems/3sum/

function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  const res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; ++i) {
    for (let l = i + 1, r = nums.length - 1; l < r; ) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) r--;
      else if (sum < 0) l++;
      else {
        res.push([nums[i], nums[l], nums[r]]);
        while (r - 1 > l && nums[l] === nums[l + 1]) l++;
        while (l + 1 < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }

    while (nums[i] === nums[i + 1]) i++;
  }

  return res;
}
