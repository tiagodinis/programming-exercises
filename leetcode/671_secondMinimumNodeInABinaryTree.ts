// Problem: https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/

import { btNode } from "../utilities/binaryTree";

function findSecondMinimumValue(root: btNode): number {
  let secondMin = Infinity;
  let queue = [root];

  while (queue.length) {
    let nrLevelNodes = queue.length;
    for (let i = 0; i < nrLevelNodes; i++) {
      let node = queue.shift()!;
      // Either has 2 sub-nodes or is a leaf node (do nothing)
      if (node.left) {
        if (node.left!.val > root!.val)
          secondMin = Math.min(node.left!.val, secondMin);
        if (node.right!.val > root!.val)
          secondMin = Math.min(node.right!.val, secondMin);

        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  return secondMin === Infinity ? -1 : secondMin;
}
