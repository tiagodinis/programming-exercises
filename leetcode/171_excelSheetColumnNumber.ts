// Problem: https://leetcode.com/problems/excel-sheet-column-number/

function titleToNumber(columnTitle: string): number {
  let sum = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const fromLast = columnTitle.length - 1 - i;
    const charVal = columnTitle[fromLast].charCodeAt(0) - 64;
    sum += charVal * Math.pow(26, i);
  }

  return sum;
}
