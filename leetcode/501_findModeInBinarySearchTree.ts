// Problem: https://leetcode.com/problems/find-mode-in-binary-search-tree/

import { btNode } from "../utilities/binaryTree";

function findMode(root: btNode): number[] {
  let maxCount = 0;
  let map = new Map<number, number>();

  let queue = [root];

  for (let qStart = 0; queue.length - qStart; ) {
    let nrLevelNodes = queue.length - qStart;
    for (let i = 0; i < nrLevelNodes; i++, qStart++) {
      let dequeued = queue[qStart]!;

      let count = map.get(dequeued.val);
      count = count ? count + 1 : 1;
      if (maxCount < count) maxCount = count;
      map.set(dequeued.val, count);

      if (dequeued.left) queue.push(dequeued.left);
      if (dequeued.right) queue.push(dequeued.right);
    }
  }

  let res = [];
  for (const [key, value] of map.entries())
    if (value === maxCount) res.push(key);

  return res;
}
