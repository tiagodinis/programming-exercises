// Problem: https://leetcode.com/problems/average-of-levels-in-binary-tree/

import { btNode } from "../utilities/binaryTree";

function averageOfLevels(root: btNode): number[] {
  let lvlAverages: number[] = [];
  let queue: btNode[] = [root];
  while (queue.length) {
    let nrLevelNodes = queue.length;
    let lvlSum = 0;
    for (let i = nrLevelNodes; i--; ) {
      let dequeued = queue.shift()!;
      lvlSum += dequeued.val;
      if (dequeued.left) queue.push(dequeued.left);
      if (dequeued.right) queue.push(dequeued.right);
    }
    lvlAverages.push(lvlSum / nrLevelNodes);
  }
  return lvlAverages;
}
