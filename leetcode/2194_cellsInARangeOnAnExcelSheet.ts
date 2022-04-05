// Problem: https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

function cellsInRange(s: string): string[] {
  const res = [];
  const colRange = [s.charCodeAt(0), s.charCodeAt(3) + 1];
  const rowRange = [parseInt(s[1]), parseInt(s[4]) + 1];
  for (let i = colRange[0]; i < colRange[1]; i++) {
    const col = String.fromCharCode(i);
    for (let j = rowRange[0]; j < rowRange[1]; j++) res.push(`${col}${j}`);
  }

  return res;
}
