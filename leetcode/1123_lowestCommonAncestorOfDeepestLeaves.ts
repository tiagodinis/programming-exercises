// Problem: https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/

import { btNode } from "../utilities/binaryTree";

function lcaDeepestLeaves(root: btNode) {
  let levels: btNode[][] = [];
  let queue: btNode[] = [root];

  // Fill levels
  while (queue.length) {
    let nrLvlNodes = queue.length;
    levels.push([]);
    while (nrLvlNodes--) {
      let dequeued = queue.shift()!;
      levels[levels.length - 1].push(dequeued);
      if (dequeued.left) queue.push(dequeued.left);
      if (dequeued.right) queue.push(dequeued.right);
    }
  }

  // Create set with final level
  let ancestors = new Set<btNode>(levels[levels.length - 1]);
  for (let iLvl = levels.length - 2; ancestors.size > 1; --iLvl) {
    let upperLevel = levels[iLvl];
    for (let i = 0; i < upperLevel.length; ++i) {
      if (ancestors.has(upperLevel[i].left)) {
        ancestors.delete(upperLevel[i]!.left);
        ancestors.add(upperLevel[i]);
        if (ancestors.has(upperLevel[i]!.right)) {
          ancestors.delete(upperLevel[i]!.right);
        }
      } else if (ancestors.has(upperLevel[i]!.right)) {
        ancestors.delete(upperLevel[i]!.right);
        ancestors.add(upperLevel[i]);
      }
    }
  }

  return ancestors.values().next().value;
}
