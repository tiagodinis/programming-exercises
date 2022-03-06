// Problem: https://leetcode.com/problems/third-maximum-number/

function thirdMax(nums: number[]): number {
  let max = Array(3).fill(-Infinity);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max[0] || nums[i] === max[1] || nums[i] === max[2])
      continue;
    if (nums[i] > max[0]) {
      max[0] = nums[i];
      for (let j = 0; max[j] > max[j + 1]; j++)
        [max[j], max[j + 1]] = [max[j + 1], max[j]];
    }
  }

  return max[0] === -Infinity ? max[2] : max[0];
}
