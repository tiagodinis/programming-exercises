// Problem: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

function twoSumII(numbers: number[], target: number): number[] {
  let leftP: number = 0;
  let rightP: number = numbers.length - 1;
  let sum: number;

  while (leftP !== rightP) {
    sum = numbers[leftP] + numbers[rightP];
    if (sum === target) return [++leftP, ++rightP];
    else if (sum < target) leftP++;
    else rightP--;
  }

  return [];
}
