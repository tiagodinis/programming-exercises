// Problem: https://leetcode.com/problems/two-sum/

function twoSum(numbers: number[], target: number): number[] {
  let hash: Record<string, number> = {};
  let otherIndex: number;

  for (let i = 0; i < numbers.length; ++i) {
    otherIndex = hash[target - numbers[i]];
    if (otherIndex !== undefined) return [otherIndex, i];
    hash[numbers[i]] = i;
  }

  return [];
}
