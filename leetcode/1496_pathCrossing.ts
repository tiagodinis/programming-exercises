// Problem: https://leetcode.com/problems/path-crossing/

const actions: { [k: string]: [number, number] } = {
  N: [1, 1],
  S: [1, -1],
  E: [0, 1],
  W: [0, -1],
};

function isPathCrossing(path: string): boolean {
  let visited = new Set(["0-0"]);
  let pos: [number, number] = [0, 0];

  for (let i = 0; i < path.length; ++i) {
    pos[actions[path[i]][0]] += actions[path[i]][1];
    let posKey = `${pos[0]}-${pos[1]}`;
    if (visited.has(posKey)) return true;
    visited.add(posKey);
  }

  return false;
}
