// Problem: https://leetcode.com/problems/cousins-in-binary-tree/

import { btNode } from "../utilities/binaryTree";

function isCousins(root: btNode, x: number, y: number): boolean {
  let queue: btNode[] = [root];
  let parents: number[] = [];

  let testChild = (parent: btNode, child: btNode): boolean => {
    if (!child) return false;
    queue.push(child);
    if (child!.val === x || child!.val === y) {
      parents.push(parent!.val);
      if (parents.length === 2) return parents[0] !== parents[1];
    }
    return false;
  };

  while (queue.length) {
    let nrLevelNodes = queue.length;
    while (nrLevelNodes--) {
      let dequeued = queue.shift()!;
      if (testChild(dequeued, dequeued.left)) return true;
      if (testChild(dequeued, dequeued.right)) return true;
    }
    if (parents.length === 1) return false;
  }

  return false;
}
