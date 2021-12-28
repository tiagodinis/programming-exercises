// Problem: https://leetcode.com/problems/furthest-building-you-can-reach/

function furthestBuilding(
  heights: number[],
  bricks: number,
  ladders: number
): number {
  let splits = Array(ladders + 1).fill(0);

  for (let i = 0; i < heights.length - 1; ++i) {
    let gap = heights[i + 1] - heights[i];
    if (gap < 1) continue; // No gap to climb
    for (let j = splits.length - 1; j > 0; --j)
      if (gap > splits[j]) [splits[j], gap] = [gap, splits[j]];
    splits[0] += gap;
    if (splits[0] > bricks) return i;
  }

  return heights.length - 1;
}
