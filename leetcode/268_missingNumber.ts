// Problem: https://leetcode.com/problems/missing-number/

import { getAdditiveFactorialValue } from "../utilities/factorial";

function missingNumber(nums: number[]): number {
  let res = getAdditiveFactorialValue(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) res -= nums[i];
  return res;
}
