// Problem: https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
  const nCounter = new Map();
  const length = nums.length;
  const halfLength = Math.trunc(nums.length * 0.5);
  for (let i = 0; i < length; i++) {
    const newVal = nCounter.has(nums[i]) ? nCounter.get(nums[i]) + 1 : 1;
    if (newVal > halfLength) return nums[i];

    if (newVal === 1) nCounter.set(nums[i], newVal);
    else nCounter.set(nums[i], newVal);
  }

  return -1;
}
