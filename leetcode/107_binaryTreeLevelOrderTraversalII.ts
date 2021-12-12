// Problem: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

import { btNode } from "../utilities/binaryTree";

function levelOrderBottom(root: btNode): number[][] {
  if (!root) return [];
  let res: number[][] = [];
  let queue: btNode[] = [root];

  while (queue.length) {
    let nrLvlNodes = queue.length;
    res.push([]);
    while (nrLvlNodes--) {
      let dequeued = queue.shift()!;
      res[res.length - 1].push(dequeued.val);
      if (dequeued.left) queue.push(dequeued.left);
      if (dequeued.right) queue.push(dequeued.right);
    }
  }

  return res.reverse();
}
