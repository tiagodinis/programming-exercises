// Problem: https://leetcode.com/problems/same-tree/

import { btNode } from "../utilities/binaryTree";

export function isSameTree(root1: btNode, root2: btNode): boolean {
  let queue1 = [root1];
  let queue2 = [root2];

  while (queue1.length || queue2.length) {
    let nrLvlNodes1 = queue1.length;
    let nrLvlNodes2 = queue2.length;
    if (nrLvlNodes1 !== nrLvlNodes2) return false;

    for (let i = 0; i < nrLvlNodes1; i++) {
      let dequeued1 = queue1.shift()!;
      let dequeued2 = queue2.shift()!;

      if (dequeued1?.val !== dequeued2?.val) return false;

      if (dequeued1) {
        queue1.push(dequeued1.left);
        queue1.push(dequeued1.right);
      }
      if (dequeued2) {
        queue2.push(dequeued2.left);
        queue2.push(dequeued2.right);
      }
    }
  }

  return true;
}
