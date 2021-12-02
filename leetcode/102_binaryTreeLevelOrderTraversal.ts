// Problem: https://leetcode.com/problems/binary-tree-level-order-traversal/

import { btNode } from "../utilities/binaryTree";

function levelOrder(root: btNode): number[][] {
  let queue: btNode[] = root ? [root] : [];
  let res: number[][] = [];

  while (queue.length) {
    let nrLevelNodes: number = queue.length;
    let levelValues: number[] = [];
    for (let i = 0; i < nrLevelNodes; ++i) {
      let dequeued = queue.shift()!;
      levelValues.push(dequeued.val);
      if (dequeued.left) queue.push(dequeued.left);
      if (dequeued.right) queue.push(dequeued.right);
    }
    res.push(levelValues);
  }

  return res;
}
