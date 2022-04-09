// Problem: https://leetcode.com/problems/robot-return-to-origin/

function judgeCircle(moves: string): boolean {
  let [U, D, L, R] = [0, 0, 0, 0];
  for (let i = moves.length - 1; i >= 0; i--) {
    if (moves[i] === "U") U++;
    if (moves[i] === "D") D++;
    if (moves[i] === "L") L++;
    if (moves[i] === "R") R++;
  }

  return U === D && L === R;
}
