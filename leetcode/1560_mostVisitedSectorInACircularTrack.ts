// Problem: https://leetcode.com/problems/most-visited-sector-in-a-circular-track/

function mostVisited(n: number, rounds: number[]): number[] {
  let res = Array(n).fill(0);
  let startSectorInd = rounds[0] - 1;
  res[startSectorInd] = 1;

  for (let i = 1; i < rounds.length; i++) {
    let start = rounds[i - 1];
    let end = rounds[i] < start ? rounds[i] + n : rounds[i];

    for (let dif = end - start; dif; dif--) {
      let visitedInd = (rounds[i] < dif ? rounds[i] + n : rounds[i]) - dif;
      res[visitedInd]++;
    }
  }

  let l = 0;
  for (let r = 0, maxCount = res[startSectorInd]; r < n; r++) {
    if (res[r] === maxCount) {
      res[l] = r + 1;
      l++;
    }
  }

  return res.slice(0, l);
}
