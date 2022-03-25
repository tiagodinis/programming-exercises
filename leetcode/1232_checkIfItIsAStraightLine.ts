// Problem: https://leetcode.com/problems/check-if-it-is-a-straight-line/

function checkStraightLine(coordinates: number[][]): boolean {
  const dX = coordinates[0][0] - coordinates[1][0];
  const dY = coordinates[0][1] - coordinates[1][1];

  for (let i = coordinates.length - 1; i > 1; i--) {
    const [x, y] = coordinates[i];
    if (dX * (y - coordinates[0][1]) !== dY * (x - coordinates[0][0]))
      return false;
  }

  return true;
}

console.log(
  checkStraightLine([
    [4, 8],
    [-2, 8],
    [7, 8],
    [5, 8],
  ])
);
