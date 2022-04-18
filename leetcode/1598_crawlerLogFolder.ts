// Problem: https://leetcode.com/problems/crawler-log-folder/

function minOperations(logs: string[]): number {
  let depth = 0;

  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === "./") continue;
    else if (logs[i] === "../") depth = Math.max(0, depth - 1);
    else depth++;
  }

  return depth;
}
