// Problem: https://leetcode.com/problems/search-a-2d-matrix/

function searchMatrix(matrix: number[][], target: number): boolean {
  let row: number[] = [];
  let mid: number = 0;
  let left: number = 0;
  let right: number = matrix.length - 1;

  while (left <= right && !row.length) {
    mid = left + Math.trunc((right - left) / 2);
    const midRange = [matrix[mid][0], matrix[mid][matrix[mid].length - 1]];
    if (target >= midRange[0] && target <= midRange[1]) row = matrix[mid];
    else if (target > midRange[1]) left = mid + 1;
    else right = mid - 1;
  }

  if (!row.length) return false;

  left = 0;
  right = row.length - 1;
  while (left <= right) {
    mid = left + Math.trunc((right - left) / 2);
    const midVal = row[mid];
    if (midVal === target) return true;
    if (midVal < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
}
